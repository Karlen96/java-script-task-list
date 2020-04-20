function edit() {
	const allLi = document.querySelectorAll(".lists li");
	const allText = document.querySelectorAll(".lists li .text");
	const allH6 = document.querySelectorAll(".lists li .text h6");
	let editTask = this.getAttribute("data-id");
	let buttons = document.querySelectorAll(".lists li .buttons");
	for (let i = 0; i < allLi.length; i++) {
		if (allLi[i].getAttribute("data-id") == editTask) {
			allLi[i].querySelector(".edit__task").style.display = "none";
			let save = document.createElement("button");
			save.classList.add("btn");
			save.classList.add("btn-success");
			save.classList.add("save");
			save.innerHTML = "save";
			buttons[i].append(save);
			let inputEdit = document.createElement("input");
			allText[i].append(inputEdit);
			allH6[i].style.display = "none";
			let saveBtn = document.querySelector(".save");
			saveBtn.addEventListener("click", () => {
				let textEditInput = allLi[i].querySelector(".text input");
				if (textEditInput.value != "") {
					allH6[i].innerHTML = textEditInput.value;
					allH6[i].style.display = "block";
					saveBtn.remove();
					inputEdit.remove();
				}
				allLi[i].querySelector(".edit__task").style.display = "flex";
			});
		}
	}
	refresh();
}