const pname=document.querySelector("#pname");
const pemail=document.querySelector("#pemail");
const buttonEl=document.querySelector("#name");
const button2El=document.querySelector("#email");
buttonEl.addEventListener("click" ,() =>{
   const text=prompt("Enter to change");
   console.log(text);
   pname.innerText=text;
})
button2El.addEventListener("click" ,() =>{
   const email=prompt("Enter to change");
   console.log(email);
   pemail.innerText=email;
})