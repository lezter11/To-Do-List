const inputBox= document.getElementById("input-text");
const listContainer= document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        console.log(inputBox.value)
        alert("Enter something");
    }
    else{
        console.log(inputBox.value)
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        //console.log(e.target.tagName)
        //console.log(e.target.classList)
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        //console.log(e.target.tagName)
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showList();