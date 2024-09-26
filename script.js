/**
 * @overview To-do List app allows you to add tasks, check or uncheck them, and delete them.
 * @author   Monaheng Ntai
 * @version  1.0
 * @since    2023-05-27
 */

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    // check task
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

        // dalete task    
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

/// save the data to the local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// show the data from the local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
