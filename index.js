const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.logText.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click',logText,{
    capture:true
}) );

button.addEventListener('click',()=>{
    console.log('click!!');
},{
  once:true
})