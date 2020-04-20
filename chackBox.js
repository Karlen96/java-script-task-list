function change() {
	let check = this.checked;
	let allLiTask = document.querySelectorAll(".list__task li");
	let listTask = document.querySelector(".list__task");
	if (check == true) {
		for (let i = 0; i < allLiTask.length; i++) {
			if (allLiTask[i].getAttribute("data-id") == this.getAttribute("data-id")) {
				allLiTask[i].remove();
				completedTask.append(allLiTask[i]);
			}
		}
	} else {
		let editChecked = document.querySelectorAll(".completed__task input");
		let allLiCompleted = document.querySelectorAll(".completed__task li");
		for (let i = 0; i < editChecked.length; i++) {
			if (editChecked[i].checked == false) {
				allLiCompleted[i].remove();
				listTask.append(allLiCompleted[i]);
			}
		}
	}
	refresh();
}