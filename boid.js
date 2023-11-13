function random2D() {
    let r = Math.random() * 2 * Math.PI
    let velocity = createVector(cos(r),sin(r));
    return velocity;
}


class Boid {
    constructor(){
        this.position = createVector(random(width),random(height));
        this.velocity = random2D();
        this.velocity.setMag(random(maxspeed/2,maxspeed))
        this.acceleration = createVector();
        this.maxforce = force;
        this.maxspeed = maxspeed;
    }

    setMaxSpeed(newMaxSpeed) {
        this.maxspeed = newMaxSpeed;
        this.velocity.setMag(random(newMaxSpeed/2,newMaxSpeed))
      }

    edges(){
        if (this.position.x > width){
            this.position.x = 0;
        }else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height){
            this.position.y = 0;
        }else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    align(boids){
        let perceptionRadius = alignvision;
        let steering = createVector();
        let total = 0;

        for(let other of boids){
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if(other != this && d < perceptionRadius){
                steering.add(other.velocity);
                total++;
            }
        }
        if(total>0){
            steering.div(total);
            steering.setMag(this.maxspeed);
            steering.sub(this.velocity);
            steering.limit(this.maxforce);
        }
        return steering;
    }


    cohesion(boids){
        let perceptionRadius = cohesionvision;
        let steering = createVector();
        let total = 0;

        for(let other of boids){
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if(other != this && d < perceptionRadius){
                steering.add(other.position);
                total++;
            }
        }
        if(total>0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxspeed);
            steering.sub(this.velocity);
            steering.limit(this.maxforce);
        }
        return steering;
    }


    separation(boids){
        let perceptionRadius = separationvision;
        let steering = createVector();
        let total = 0;

        for(let other of boids){
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if(other != this && d < perceptionRadius){

                let diff = createVector((this.position.x-other.position.x),(this.position.y-other.position.y))
                diff.div(d);
                steering.add(diff);
                total++;
            }
        }
        if(total>0){
            steering.div(total);
            steering.setMag(this.maxspeed);
            steering.sub(this.velocity);
            steering.limit(this.maxforce);
        }
        return steering;
    }



    flock(boids){
        let alignment = createVector();
        let cohesion = createVector();
        let separation = createVector();

        alignment = this.align(boids);
        cohesion = this.cohesion(boids);
        separation = this.separation(boids);


        this.acceleration.add(alignment.mult(alignforce));
        this.acceleration.add(cohesion.mult(cohesionforce));
        this.acceleration.add(separation.mult(separationforce));
    }

    update(){
        this.velocity.limit(this.maxspeed)
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);

        if (regenforce === true) {
            this.acceleration.mult(0);
        }
    }

    show(img){
        colorMode(RGB)

        push()

        //strokeWeight(2);
        //stroke(50);
        //fill(200, 255, 255, 255)
        noStroke()
        translate(this.position.x, this.position.y); 
        rotate(this.velocity.heading()+Math.PI); 
        //triangle(-13, 9, 14, 0, -13, -9);
        image(img, -img.width / 40, -img.height / 40, img.width / 20, img.height / 20)

        noStroke()
        fill(256, 0, 0, 5)
        circle(0,0,alignvision)

        fill(0, 256, 0, 5)
        circle(0,0,cohesionvision)

        fill(0, 0, 256, 5)
        circle(0,0,separationvision)

        pop()
        
    }
}