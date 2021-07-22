const w = document.getElementById("nonew")
const menuBtn = document.getElementById("menu")
const title = document.querySelectorAll(".title");
const angle = document.querySelectorAll(".angle");
let clickNumbers=0;
// 点击菜单展开，再次点击收缩
menuBtn.onclick = function(){
  ++clickNumbers;
  if(clickNumbers%2!=0){
    w.style.width="12rem"
  }else{ 
    w.style.width="0"
  }
}

//实现二级菜单
var openDiv = title[0].parentNode;

for(let i=0;i<title.length;i++){
  title[i].onclick = function(){
    let parentDiv = this.parentNode;
    toggleMenu(parentDiv);
    if(openDiv != parentDiv && !hasClass(openDiv,"collapsed")){
      toggleMenu(openDiv);
    }

    // 切换箭头
    if(!hasClass(openDiv,"collapsed")){
      console.log(i)
      toggleClass(angle[i],"fa-angle-right")
      toggleClass(angle[i],"fa-angle-down")
    }else{
      console.log(i+' 4')
      toggleClass(angle[i],"fa-angle-down")
      toggleClass(angle[i],"fa-angle-right")
    }
    
    openDiv = parentDiv;
  }
}

//切换菜单的折叠显示状态
function toggleMenu(obj){
  var begin = obj.offsetHeight;
  toggleClass(obj,"collapsed");
  var end = obj.offsetHeight;
  obj.style.height = begin + "px";
  move(obj,"height",end,10,function(){
      obj.style.height = "";
  });
}
