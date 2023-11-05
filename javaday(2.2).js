const boxEl=document.querySelector("#box");
const btnInput=document.querySelector("#btninput");
const btnApply=document.querySelector("#btnApply");
const btnRadius=document.querySelector("#btnradius");
console.log(btnApply);
btnApply.addEventListener("click", ()=>{
    const text=btnInput.value;
    if(text !==""){
    boxEl.style.background=text;
    }
   
})
btnRadius.addEventListener("change" , ()=>{
    const Radius=btnRadius.value;
    boxEl.style.borderRadius=Radius + 'px';
})