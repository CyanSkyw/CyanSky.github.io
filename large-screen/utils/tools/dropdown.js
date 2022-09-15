let dropdownList = document.querySelectorAll("[data-toggle='dropdown']")


for(let i=0;i<dropdownList.length;i++){
    let button=dropdownList[i].querySelector('button');
    let menu=dropdownList[i].querySelector('ul');
    let showMenu=false;
    dropdownList[i].addEventListener('click',event=>{
        // debugger
        switch(event.target.tagName){
            case "BUTTON":
                if(showMenu){
                    menu.classList.remove('active');
                }else{
                    menu.classList.add('active');
                };
                showMenu=!showMenu;
                break;
            case "LI":
                // debugger
                console.log(event.target,showMenu,button);
                button.innerText=event.target.innerText+'年';
                menu.classList.remove('active');
                dropdownList[i].dispatchEvent(new CustomEvent('select',{detail:[event.target.innerText]}))
                showMenu=false;
                break;
        };
        button.addEventListener('blur',()=>{
            if(showMenu){
                menu.classList.remove('active');
            }
            showMenu=false;
        })
        
    })
}

