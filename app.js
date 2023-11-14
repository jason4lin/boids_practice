function addbutton() {
    const dopos = document.getElementById("settings-container");
    let openDialogBtn = document.createElement("button");
    openDialogBtn.id = "open-dialog-btn";
    openDialogBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
        <circle cx="12" cy="12" r="3" />
        </svg>
    `;
    const style = document.createElement("style");
    //scss
    style.innerText = `
        *{box-sizing:border-box}.wrapper{display:flex;align-items:center;justify-content:center;background-color:rgba(15,19,26,.8);height:100vh;position:fixed;width:100%;left:0;top:0;overflow:auto;z-index:9999}.header{display:flex;justify-content:space-between;padding:1rem 1rem 0 1rem;position:absolute;width:calc(100% - 56px);top:0;left:56px;border-bottom:1px solid #3c3f43}.header button{height:100%}.header h1{color:#fff}.header #close-dialog-btn{margin-left:auto}.content-container{padding-top:50px;margin-left:56px;height:100%}.content-container .content{display:flex;margin:0 1rem 1rem 1rem;flex-direction:column;height:100%;overflow-y:scroll}.content-container .content hr{width:100%}.panel{position:relative;width:100%;display:flex;flex-direction:column;display:none;opacity:0}.panel input[type=checkbox]{margin:.5rem}.panel input[type=text]{background-color:#1a1d24;background-image:none;border:1px solid #3c3f43;border-radius:6px;color:#e9ebf0;display:block;font-size:14px;line-height:1.42857143;padding:7px 11px;transition:border-color .3s ease-in-out;width:100px}.panel input[type=color]{background-color:#292d33;width:50px}.panel button{border-radius:.375rem;padding:.25rem}.panel button.warning{background-color:var(--chakra-colors-red-500)}.panel button.warning:hover{background-color:var(--chakra-colors-red-600)}.panel[expand]{display:block;opacity:1}.panel-header{width:100%;padding:20px}.panel-header span{color:#fff;font-size:16px;line-height:1.25}.panel-body{padding:0 20px 20px 20px}.panel-body .row{margin-top:1rem;display:flex;align-items:center}.panel-body .row label{color:#a4a9b3;margin-right:1rem}.panel-body .row input{margin-right:1rem}.panel-body .row a{color:#a4a9b3;margin-right:1rem;text-decoration:underline}.panel-body .row a:hover{background-color:#3c3f43}.panel-body .row.table{flex-direction:column;align-items:flex-start}.record{width:100%;border-bottom:1px solid #3c3f43}.record .record-header{margin-top:.25rem}.record .record-body{display:flex;flex-direction:column}.record .record-item{display:flex;width:80%;margin:.5rem 0}.record .record-quatity{margin-left:auto}.grid{margin-top:10px;width:100%;color:#a4a9b3;background-color:#1a1d24}.grid div{border-bottom:1px solid #292d33;width:100%;height:40px;padding:10px}.grid .grid-row{display:flex;align-items:center}.grid .grid-row:hover{background-color:#3c3f43}.grid .grid-row button{font-size:14px;border:none;background-color:rgba(0,0,0,0);color:#9146ff;margin-left:auto}.grid .grid-row button:hover{cursor:pointer}.description{margin:0px;color:#a4a9b3;line-height:1.5;font-size:8px}.dialog{width:800px;height:500px;position:relative;overflow:auto;z-index:9999;display:flex;background-color:#292d33;border-radius:6px;box-shadow:0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06);display:block}.dialog .navbar{height:500px;background-color:#1a1d24;width:56px;position:fixed;display:flex;flex-direction:column}.dialog .navbar button{height:50px}.dialog .navbar button:hover{background-color:#292d33}.dialog .navbar button[active]{background-color:#292d33}.dialog .right-container{margin-left:56px}#open-dialog-btn{position:-webkit-sticky;position:sticky;left:0;bottom:20px;margin-right:1rem;z-index:9998;color:#7d7d7d;background-color:rgba(0,0,0,0);border:none}#open-dialog-btn:hover{color:#fff}#exp-bar{position:fixed;bottom:0px;width:100%;height:24px}#exp-bar-fill{position:fixed;bottom:0px;left:0px;height:24px}.exp-container{display:flex;justify-content:flex-end;position:fixed;width:100%;bottom:0px}.quick-filter-container{display:flex;margin-bottom:.5rem;align-items:center;-webkit-box-align:center}.quick-filter-container div{width:18px;height:18px;margin-right:var(--chakra-space-3);border-radius:50%;background:var(--chakra-colors-transparent);border-width:2px;border-style:solid;-o-border-image:initial;border-image:initial;cursor:pointer}.quick-filter-container .circle-red{border-color:var(--chakra-colors-red-500)}.quick-filter-container .circle-red:hover{background-color:var(--chakra-colors-red-300)}.quick-filter-container .circle-blue{border-color:var(--chakra-colors-blue-500)}.quick-filter-container .circle-blue:hover{background-color:var(--chakra-colors-blue-300)}.quick-filter-container .circle-cyan{border-color:var(--chakra-colors-cyan-500)}.quick-filter-container .circle-cyan:hover{background-color:var(--chakra-colors-cyan-300)}.quick-filter-container .circle-green{border-color:var(--chakra-colors-green-500)}.quick-filter-container .circle-green:hover{background-color:var(--chakra-colors-green-300)}.quick-filter-container .circle-teal{border-color:var(--chakra-colors-teal-500)}.quick-filter-container .circle-teal:hover{background-color:var(--chakra-colors-teal-300)}.quick-filter-container .circle-orange{border-color:var(--chakra-colors-orange-500)}.quick-filter-container .circle-orange:hover{background-color:var(--chakra-colors-orange-300)}.quick-filter-container .circle-yellow{border-color:var(--chakra-colors-yellow-500)}.quick-filter-container .circle-yellow:hover{background-color:var(--chakra-colors-yellow-300)}.quick-filter-container .circle-pink{border-color:var(--chakra-colors-pink-500)}.quick-filter-container .circle-pink:hover{background-color:var(--chakra-colors-pink-300)}.quick-filter-container .circle-purple{border-color:var(--chakra-colors-purple-500)}.quick-filter-container .circle-purple:hover{background-color:var(--chakra-colors-purple-300)}.quick-filter-container .circle-gray{border-color:var(--chakra-colors-gray-500)}.quick-filter-container .circle-gray:hover{background-color:var(--chakra-colors-gray-300)}.type-filter-container{display:flex;align-items:center;flex-wrap:wrap}.type-filter-container .choice{display:flex;align-items:center;margin-right:.5rem}.type-filter-container .choice .circle{width:18px;height:18px;margin-right:var(--chakra-space-1);border-radius:50%;background:var(--chakra-colors-transparent);border-width:2px;border-style:solid;-o-border-image:initial;border-image:initial;border-color:var(--chakra-colors-gray-500);cursor:pointer;display:block}.type-filter-container .choice .circle:hover{background-color:var(--chakra-colors-gray-300)}
    `;
    openDialogBtn.onclick = () => {
        ShowSettingPage();
        registerSettingUIEvent();
        document.body.style.overflow = "hidden";
    };
    dopos.appendChild(style);
    dopos.appendChild(openDialogBtn);
  }
  
  function ShowSettingPage() {
    console.log('1')
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.style.display = "";
    wrapper.innerHTML = ` 
    <div class="dialog">
        <div class="navbar">
        </div>
        <div class="header">
            <h1>Settings</h1>
            <button id="reset-settings-btn" hidden>RESET</button>
            <button id="close-dialog-btn">X</button>
        </div>
        <div class="content-container">
            <div class="content">
            </div>
        </div>
    </div>`;
  
    document.body.appendChild(wrapper);
    creatUI(wrapper);
  }
  
  function creatUI(wrapper) {
    console.log('2')
    const content = wrapper.querySelector(".content");
    const navbar = wrapper.querySelector(".navbar");
  
    const funcButton = document.createElement('button');
    funcButton.setAttribute('bind-panel-index', '0');
    funcButton.setAttribute('active', '');
    funcButton.textContent = '功能';
  
    navbar.appendChild(funcButton);
  
    const panelFunc = document.createElement('div');
    panelFunc.classList.add('panel');
    panelFunc.setAttribute('panel-index', '0');
    panelFunc.setAttribute('expand', '');
  
    const panelFuncHeader = document.createElement('div');
    panelFuncHeader.classList.add('panel-header');
    panelFuncHeader.innerHTML = '<span>功能</span>';
  
    const panelFuncBody = document.createElement('div');
    panelFuncBody.classList.add('panel-body');
    panelFuncBody.innerHTML = `
        <p class="description" style="font-size: 1rem">細項調整</p>
        <div class="row">
            <label for="regenforce">每次都重新計算力(做不完沒有用)</label>
            <input type="checkbox" class="menuinput-checkbox" id="regenforce" checked="${regenforce}">
            <span id="regenforceValue">${regenforce}</span>
        </div>
        <div class="row">
            <label for="boidscount">boids count</label>
            <input id="boidscount" class="menuinput-slider" type="range" min="0" max="1000" step="1" value="${boidscount}">
            <span id="boidscountValue">${boidscount}</span>
        </div>
        <div class="row">
            <label for="alignvision">align vision</label>
            <input id="alignvision" class="menuinput-slider" type="range" min="0" max="1000" step="1" value="${alignvision}">
            <span id="alignvisionValue">${alignvision}</span>
        </div>
        <div class="row">
            <label for="cohesionvision">cohesion vision</label>
            <input id="cohesionvision" class="menuinput-slider" type="range" min="0" max="1000" step="1" value="${cohesionvision}">
            <span id="cohesionvisionValue">${cohesionvision}</span>
        </div>
        <div class="row">
            <label for="separationvision">separation vision</label>
            <input id="separationvision" class="menuinput-slider" type="range" min="0" max="1000" step="1" value="${separationvision}">
            <span id="separationvisionValue">${separationvision}</span>
        </div>
        <div class="row">
            <label for="force">force</label>
            <input id="force" class="menuinput-slider" type="range" min="0" max="10" step="0.1" value="${force}">
            <span id="forceValue">${force}</span>
        </div>
        <div class="row">
            <label for="alignforce">align force</label>
            <input id="alignforce" class="menuinput-slider" type="range" min="0" max="20" step="0.1" value="${alignforce}">
            <span id="alignforceValue">${alignforce}</span>
        </div>
        <div class="row">
            <label for="cohesionforce">cohesion force</label>
            <input id="cohesionforce" class="menuinput-slider" type="range" min="0" max="20" step="0.1" value="${cohesionforce}">
            <span id="cohesionforceValue">${cohesionforce}</span>
        </div>
        <div class="row">
            <label for="separationforce">separation force</label>
            <input id="separationforce" class="menuinput-slider" type="range" min="0" max="20" step="0.1" value="${separationforce}">
            <span id="separationforceValue">${separationforce}</span>
        </div>
        <div class="row">
            <label for="maxspeed">max speed</label>
            <input id="maxspeed" class="menuinput-slider" type="range" min="0" max="100" step="0.1" value="${maxspeed}">
            <span id="maxspeedValue">${maxspeed}</span>
        </div>
    `;
  
    panelFunc.appendChild(panelFuncHeader);
    panelFunc.appendChild(panelFuncBody);
  
    content.appendChild(panelFunc);
  }
  
  function registerSettingUIEvent() {
    // document.querySelector("#open-dialog-btn").onclick = () => {document.querySelector(".wrapper").style.display = ""}
    // document.querySelector("#close-dialog-btn").onclick = () => {document.querySelector(".wrapper").style.display = "none"}
    document.querySelector("#close-dialog-btn").onclick = () => {
      document.querySelector(".wrapper").remove();
      document.body.style.overflow = "";
    };
    document.querySelectorAll(".grid-row > button").forEach((btn) => {
      btn.onclick = (e) => {
        const grid = e.currentTarget.parentElement.parentElement;
        const name =
          e.currentTarget.parentElement.querySelector("label").textContent;
        const bindSetting = grid.getAttribute("bind-setting");
        const tableList = settingStorage.get(bindSetting);
        settingStorage.set(
          bindSetting,
          tableList.filter((row) => row !== name)
        );
        settingStorage.save();
        e.currentTarget.parentElement.remove();
        if (grid.querySelectorAll(`.grid-row`).length === 0) {
          const spaceGridRow = document.createElement("div");
          spaceGridRow.innerHTML = "<label>空</label>";
          spaceGridRow.className = "grid-row";
          grid.appendChild(spaceGridRow);
        }
      };
    });
    document.querySelector("#reset-settings-btn").onclick = () => {
      SETTINGS = structuredClone(DEFAULT_SETTINGS);
      settingStorage.save();
      registerSettingUIEvent();
    };
    document.querySelector(".wrapper").onclick = (e) => {
      // if(e.target.className === "wrapper") e.target.style.display = "none";
      if (e.target.matches(".wrapper")) {
        e.target.remove();
        document.body.style.overflow = "";
      }
    };
  
    const sliders = document.querySelectorAll('input[class="menuinput-slider"]');
    sliders.forEach((slider) => {
      slider.addEventListener("input", function () {
        const currentValue = this.value;
        const correspondingSpan = document.getElementById(`${this.id}Value`);
        correspondingSpan.textContent = currentValue;
        switch (this.id) {
          case "boidscount":
            boidscount = Number(currentValue);
            break;
          case "alignvision":
            alignvision = Number(currentValue);
            break;
          case "cohesionvision":
            cohesionvision = Number(currentValue);
            break;
          case "separationvision":
            separationvision = Number(currentValue);
            break;
          case "force":
            force = Number(currentValue);
            updateForce(force);
            break;
          case "alignforce ":
            alignforce = Number(currentValue);
            break;
          case "cohesionforce":
            cohesionforce = Number(currentValue);
            break;
          case "separationforce":
            separationforce = Number(currentValue);
            break;
          case "maxspeed":
            maxspeed = Number(currentValue);
            updateMaxSpeed(maxspeed);
            break;
          default:
            break;
        }
      });
    });
  
    const checkbox = document.querySelectorAll('input[class="menuinput-checkbox"]');
    checkbox.forEach(checkbox => {
      checkbox.addEventListener('input', function() {
            const currentValue = this.checked;
            const correspondingSpan = document.getElementById(`${this.id}Value`);
            correspondingSpan.textContent = currentValue;
            switch (this.id) {
              case "regenforce":
                regenforce = this.checked;
                break;
              default:
                break;
            }
        });
    });
  }