
const w = document.getElementById("nonew")
const menuBtn = document.getElementById("menu")
let i=0;
// 点击菜单展开，再次点击收缩
menuBtn.onclick = function(){
  ++i;
  console.log(i)
  console.log(w.style.display)
  if(i%2!=0){
    w.style.width="300px"
  }else{ 
    w.style.width="0"
  }
}

