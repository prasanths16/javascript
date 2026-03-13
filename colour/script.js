let hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
let x
let but =document.getElementById("but")

but.addEventListener('click',change)
let di =document.getElementById("di")
function change()
{
      x="#"
    for (let i=1;i<=6;i++)
    {  let r=Math.floor(Math.random()*16)
        x+=hex[r];
    }
let h1 = document.getElementById("h1");
h1.textContent=x;
di.style.backgroundColor=x;

}







