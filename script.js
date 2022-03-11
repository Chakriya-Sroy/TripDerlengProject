//from main page
const container=document.getElementsByClassName('item');
for(var i=0;i<container.length;i++){
    const item=container[i];
    item.addEventListener('click',()=>{
        if(item.id==0){
            window.open("./SR.html", "_self").focus();
        }
        else if(item.id==1){
            window.open("./KP.html", "_self").focus();
        }
        else if(item.id==2){
            window.open("./PP.html", "_self").focus();
        }
        else if(item.id==3){
            window.open("./PS.html", "_self").focus();
        }
        else if(item.id==4){
            window.open("./KPS.html", "_self").focus();
        }
        else if(item.id==5){
            window.open("./Kep.html", "_self").focus();
        }

    })
  
}