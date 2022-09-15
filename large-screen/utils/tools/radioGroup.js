let radioList = document.querySelectorAll("[data-toggle='radio']")


for(let i=0;i<radioList.length;i++){
    let lastChecked=radioList[i].querySelector('li');
    radioList[i].addEventListener('click',event=>{
        if(event.target!==lastChecked){
            lastChecked.classList.remove('checked-color');
            event.target.classList.add('checked-color');
            radioList[i].dispatchEvent(new CustomEvent('chage',{detail:[event.target.innerText]}))
            lastChecked=event.target;
        }
    })
}

