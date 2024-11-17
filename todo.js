const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const clearAll = document.getElementById("clear");

function getDate() {
  const time = new Date();
  const date = String(time.getDate()).padStart(2, "0");
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const year = String(time.getFullYear()).slice(-2);
  const hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");

  //console.log(`${date}/${month}/${year}-${hour}:${min}`);
  return `${date}/${month}/${year}  ${hour}:${min}`;
}

function addTask() {
  if (inputBox.value === "") {
    console.log(inputBox.value);
    alert("Enter something");
  } else {
    console.log(inputBox.value);
    const currentDate = getDate();
    console.log(currentDate);
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent = currentDate;
    li.appendChild(spanDate);

    let spanClose = document.createElement("span");
    spanClose.classList.add("remove");
    spanClose.innerHTML = "\u00d7";
    li.appendChild(spanClose);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //console.log(e.target.tagName)
      console.log(e.target);
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //console.log(e.target.tagName)
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();

clearAll.addEventListener(
  "click",
  function (e) {
    clearTask();
    listContainer.remove();
  },
  false
);

function clearTask() {
  localStorage.clear();
}
