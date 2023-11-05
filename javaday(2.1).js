const popup=`<h1 style="background-color: blanchedalmond; color: brown;">Sa ta ma gura hide button owa mara besharma</h1>`;
const containerEl=document.querySelector("#container");
const btnShow=document.querySelector("#btnshow");
const btnhide=document.querySelector("#btnhide");
btnShow.addEventListener("click", ()=>{
containerEl.innerHTML=popup;  

})
btnhide.addEventListener("click",()=>{
    containerEl.innerHTML="";
})