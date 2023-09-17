//Variables
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

//Add Button Css
addButton.style.cursor = "Pointer";
addButton.style.border = "none";
addButton.style.marginRight = "10px";
addButton.style.borderRadius = "20px";
addButton.style.backgroundColor = "blue";
addButton.style.color = "white";
addButton.style.width = "80px";

//Add Buton Event Listener
addButton.addEventListener("click", function () {
  let task = taskInput.value.trim();

  if (task) {
    //Li and its Css
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.style.display = "flex";
    listItem.style.color = "black";
    listItem.style.fontWeight = 200;
    listItem.style.fontSize = "18px";
    listItem.style.justifyContent = "space-between";

    //Delete button and its Css
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "Blue";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "10px";
    deleteButton.style.display = "inline";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.padding = "5px 10px";

    // Append section
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    //Delete's Button event listener
    deleteButton.addEventListener("click", function () {
      listItem.parentNode.removeChild(listItem);
    });
  }
});
