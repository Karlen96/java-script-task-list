const addTask = document.querySelector(".add");
const listTask = document.querySelector(".list__task");
const inputTask = document.querySelector(".input__task");
const completedTask = document.querySelector(".completed__task");
let count = 0;

addTask.addEventListener("click", () => {
	const inputValue = inputTask.value;
	if (inputValue != "") {
		let task = document.createElement("li");
		task.classList.add("list__item");
		task.classList.add("list-group-item");
		task.classList.add("d-flex");
		task.classList.add("justify-content-between");
		task.classList.add("align-items-center");
		task.setAttribute("data-id", `${count}`);
		task.innerHTML = `
			<div class="task__left">
				<span>${count+1})</span>
				<input class="check__box" type="checkbox" data-id="${count}">
			</div>
			<div class="text"><h6>${inputValue}</h6></div>
			<div class="buttons">
				<buttom class="edit__task btn btn-warning" data-id="${count}">edit</buttom>
				<button class="delete__task btn btn-warning" data-id="${count}">delete</button>
			</div>
		`;
		listTask.append(task);
		count++;
		refresh();
	}
	let editTask = document.querySelectorAll(".edit__task");
	for (let i = 0; i < editTask.length; i++) {
		editTask[i].addEventListener("click", edit);
	}
	let deleteTask = document.querySelectorAll(".delete__task");
	for (let i = 0; i < deleteTask.length; i++) {
		deleteTask[i].addEventListener("click", del);
	}
	let checkTask = document.querySelectorAll(".check__box");
	for (let i = 0; i < checkTask.length; i++) {
		checkTask[i].addEventListener("change", change);
	}
});

function refresh() {
	let AllTaskLi = document.querySelectorAll(".lists li");
	let teskListSpan = document.querySelectorAll(".task__left span");
	let teskListCheckBox = document.querySelectorAll(".task__left .check__box");
	let teskListEdit = document.querySelectorAll(".list__item .edit__task");
	let teskListDelete = document.querySelectorAll(".list__item .delete__task");
	for (let i = 0; i < teskListSpan.length; i++) {
		AllTaskLi[i].setAttribute("data-id", i);
		teskListSpan[i].innerHTML = `${i+1})`;
		teskListCheckBox[i].setAttribute("data-id", i);
		teskListEdit[i].setAttribute("data-id", i);
		teskListDelete[i].setAttribute("data-id", i);
	}
}