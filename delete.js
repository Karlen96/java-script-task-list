function del() {
	let id = this.getAttribute("data-id");
	let allLiTask = document.querySelectorAll(".list__item");
	let spans = document.querySelectorAll(".list__item span");
	let checkBoxs = document.querySelectorAll(".list__item .task__left input");
	let buttonEdit = document.querySelectorAll(".list__item .buttons .edit__task");
	let buttonDetele = document.querySelectorAll(".list__item .buttons .delete__task");
	for (let i = 0; i < allLiTask.length; i++) {
		if (allLiTask[i].getAttribute("data-id") == id) {
			allLiTask[i].remove();
		}
	}
	refresh();
}