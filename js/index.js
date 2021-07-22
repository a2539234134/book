const w = document.getElementById("nonew");
const menuBtn = document.getElementById("menu");
const title = document.querySelectorAll(".title");
const angle = document.querySelectorAll(".angle");
const li = document.querySelectorAll(".menu-li");
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
    console.log(li)
    let parentDiv = this.parentNode;
    toggleMenu(parentDiv);
    if(openDiv != parentDiv && !hasClass(openDiv,"collapsed")){
      toggleMenu(openDiv);
    }

    //切换箭头 (存在Bug,若点了第一个，再点其他的话，箭头还是向下)
    if(!hasClass(openDiv,"collapsed")){
      toggleClass(angle[i],"fa-angle-right")
      toggleClass(angle[i],"fa-angle-down")
    }else{
      toggleClass(angle[i],"fa-angle-down")
      toggleClass(angle[i],"fa-angle-right")
    }

    //解决上面那个Bug,重写了一个removeClass2方法
    // 遍历所有的li,若有collapsed属性则是折叠状态
    // removeClass2方法中会先确定移除的属性是否存在，存在则移除，不存在则不作任何动作
    // 再添加属性，addClass方法中有先判断属性是否存在，再决定是否添加
    for(let b=0;b<li.length;b++){
      if(hasClass(li[b],"collapsed")){
        removeClass2(angle[b],"fa-angle-down")
        addClass(angle[b],"fa-angle-right")
      }
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
