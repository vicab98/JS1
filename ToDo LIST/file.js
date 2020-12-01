// let element = document.getElementsByTagName("li");



// function liClick(i){
//   myNodeList[i].style.textDecoration = "line-through";
// }

function addTodo(){
 let li = document.createElement("li");
 let list = document.getElementById("todo-list");
 let input = document.getElementById("myInput");
 li.innerHTML = input.value
 li = list.appendChild(li)
 console.log(li)
 li.addEventListener("contextmenu", removeOne)
 li.addEventListener("click", markDone)
}


function clearTodos(){
  let list = document.getElementById("todo-list")
  
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
  }
}

function markDone() {
  console.log(this)
  if (this.style.textDecoration == "line-through") {
    this.style.textDecoration = "none"
  } else {
    this.style.textDecoration = "line-through"
  }
  
}

function removeOne(event){
  event.preventDefault();

  let list = document.getElementById("todo-list")
  console.log(this)
  list.removeChild(this)
}