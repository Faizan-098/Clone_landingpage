 // Declare Variables
     let sidebar=document.querySelector('.side-bar');
     let extraScreen=document.querySelector('.extra-screen');
     let sideContainer=document.querySelector('.side-bar-container');
     let toggleIcon=document.querySelector('.toggle-icon');
// click on toggle icon
toggleIcon.addEventListener('click',()=>{
  sideContainer.classList.add('show')
})
// click on parent element
sideContainer.addEventListener('click',(e)=>{
 if(e.target.className==='extra-screen'){
   sideContainer.classList.remove('show');
  }else if(e.target.className==='list'){
  sideContainer.classList.remove('show');
}
})