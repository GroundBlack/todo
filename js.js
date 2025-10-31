const nighttheme = document.querySelector('.nightthemebutton');
const body = document.body;
const plus = document.querySelector('.plus');


if (nighttheme){
    nighttheme.onclick = function(){
        body.classList.toggle('darkmode');
        console.log("Темная тема включена");
    }
}else{
    console.log("Темная тема не найдена");
}

if (plus){
    plus.onclick = function(){
        
    }
}