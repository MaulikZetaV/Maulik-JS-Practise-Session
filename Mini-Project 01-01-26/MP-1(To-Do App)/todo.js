function addTask() {
    var input = document.getElementById("input");
    var task = input.value;

    if (task == "") {
        alert("Enter a task");
        return;
    }

    var li = document.createElement("li");
    li.innerText = task;

    var btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
