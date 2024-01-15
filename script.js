var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
var cheak = 0;


add.addEventListener("click",function(){
   if(cheak==0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
    cheak=1;
   }
   else{
    istatus.innerHTML = "stranger"
    istatus.style.color = "red"
    cheak = 0;
 }
})
