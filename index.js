function pullDown() {

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")

pullDownButton.addEventListener('mouseover',function(){
  this.setAttribute("style","background-color:#FFBEDA;")
})

pullDownButton.addEventListener('mouseout',function(){
  this.removeAttribute("style")
})

pullDownButton.addEventListener('click',function(){
  if(pullDownParents.getAttribute("style") == "display:block;"){
    pullDownParents.removeAttribute("style")
  } else{
    pullDownParents.setAttribute("style","display:block;")
  }
})

pullDownChild.forEach(function(list){
  list.addEventListener('click',function(){
    const value = list.innerHTML
    console.log(value)
    currentList.innerHTML = value
  })
})
}

window.addEventListener('load', pullDown)