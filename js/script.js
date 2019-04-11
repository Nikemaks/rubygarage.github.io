'use strict'
document.addEventListener("DOMContentLoaded", function(event) {
	let container = document.querySelector('.container'),
		addTodoList = document.getElementById('addTodoList'),
		createTodo = document.querySelectorAll('.create-todo'),
		main = document.querySelector('main'),
		checkBoxDone = document.querySelectorAll('.check-task'),
		objBd = {
			idList: [],
			title: [],
			task: [],
			taskDone: []
		},
		idLists = 0;
		
		

	main.addEventListener('click', function(event){
		let target = event.target;
		switch(target.className){
			case 'create-todo':
				addNewList();
				break;
			case 'addNewTask':
				addNewTask(event);
				break;
			case 'header-button__login':
				modalLogin();
				break;
			case 'header-button__registr':
				modalReg();	
				break;			
		}
	});

	addTodoList.addEventListener('click', createTitleToDo);

	function createTitleToDo(){
		let createTitle =  '\
			<div class="todolist-header">\
				<div class="todolist-header__left-Create">\
					<img src="img/calendar.png" alt="calendar">\
					<h2 class="todolist-header__right-title__Create">\
						<input class = "todolistNewTitle"  type="text" value = "" placeholder="Create a Todo List">\
					</h2>\
				</div>\
				<div class="todolist-header__right-Create">\
					<button class = "create-todo">Add List</button>\
				</div>\
		</div>';
		let div = document.createElement('div');
		div.className = "todolist create-list";
		div.innerHTML = createTitle;
		container.insertBefore(div, addTodoList);
	}

	function addNewList(){
		let title = document.querySelector('.todolistNewTitle').value,
			createList = document.querySelector('.create-list');
		createNewToDoList(title);
		bdToDo(title);
		createList.remove();
	}
	function bdToDo(title){
		objBd.title.push(title);
		objBd.idList.push(idLists);
		idLists++;
	}

	function createNewToDoList(title){
		let todolistHeaderAddTask = '<div class="todolist-header">\
					<div class="todolist-header__left">\
						<img src="img/calendar.png" alt="calendar">\
						<h2 class="todolist-header__right-title"><input class = "title-todo" disabled type="text" value = "'+title+'"></h2>\
					</div>\
					<div class="todolist-header__right">\
						<div class = eddit-icons>\
							<img class="todolist-edit" src="img/pencil-edit-button.png" alt="edit">\
							<img class="todolist-delete" src="img/rubbish-bin.png" alt="delete">\
							</div>\
						<div class = "save-icons">\
							<img class = "save-HeaderTitle" src="img/save-file-option.png" alt = "save">\
							<img class = "edit-HeaderTitle" src="img/cancel.png" alt = "cancel">\
						</div>  \
					</div>\
				</div>\
				<div class="todolist-addTask">\
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" height="24px" width="24px"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" fill="#599072"/></svg>\
					<div class="todolist-addTask_groupButton">\
						<input class = "text-task" type="text" placeholder="Start typing here to create a task...">\
						<input class = "addNewTask" type="submit" value="Add Tasks">\
					</div>\
				</div>';
		let div = document.createElement('div');
		div.className = "todolist";
		div.setAttribute('list-number', idLists);
		div.innerHTML = todolistHeaderAddTask;

		container.insertBefore(div, addTodoList);
		getTitleTaks();
		edditTitleSave();
		editTitleCancel();
	}

	function addNewTask(event){
		let textTaskOnput = event.target.parentNode.querySelector('.text-task'),
			textTask = textTaskOnput.value,
			inputTextTask = event.target.parentNode.querySelector('.text-task'),
			todolistaddTask = document.querySelector('.todolist-addTask'),
			todolist = event.target.parentNode.parentNode.parentNode,
			todoTaskContent = '<div class="todolist-content__elem">\
						<div class="todolist-content__elem-check">\
							<input class = "check-task" type="checkbox">\
						</div>\
						<div class="todolist-content__elem-text">\
							<input class = "text-task"  type="text" disabled value= "'+ textTask +'"">\
						</div>\
						<div class="todolist-content__elem-tools">\
							<div class = "defoult-Tools">\
								<svg xmlns="http://www.w3.org/2000/svg" width = "14px" height = "14px" fill="#9A9A9A" viewBox="0 0 243.295 243.295"><path d="M94.654 114.147h53.987v15H94.654v-15zm87.648-42.079l-53.155.002-.001 25.989h-15l.001-25.988-53.155.002L121.647 0l60.655 72.068zm-32.229-14.999l-28.426-33.774-28.425 33.776 56.851-.002zM60.992 171.227l53.156-.002.001-25.989h15l-.001 25.988 53.155-.002-60.655 72.072-60.656-72.067zm32.23 14.999L121.647 220l28.425-33.776-56.85.002z"/></svg>\
								<svg class = "editing-editTask"  height="14px" width="14px" fill="#9A9A9A" viewBox="0 0 476.764 476"  xmlns="http://www.w3.org/2000/svg"><path d="M451.023 26.117c-34.386-34.312-90.058-34.312-124.449 0v.047L40.992 311.714a7.968 7.968 0 0 0-1.543 2.337 6.842 6.842 0 0 0-.273.656 6.889 6.889 0 0 0-.262.664L.258 467.133c-.715 2.742.082 5.66 2.086 7.664s4.922 2.797 7.664 2.086l151.754-38.64c.23-.063.43-.184.656-.263a7.26 7.26 0 0 0 .68-.273 7.931 7.931 0 0 0 2.328-1.543l285.543-285.559.054-.042c34.32-34.383 34.32-90.063 0-124.446zm-11.312 11.309c25.887 25.949 28.187 67.183 5.351 95.851L343.873 32.074c28.663-22.836 69.898-20.531 95.839 5.352zm-107.473 5.707L434.047 144.89l-28.68 28.687L303.56 71.773zm-303.445 376.8a56.536 56.536 0 0 1 28.414 28.415L19.09 458.05zm44 24.422a72.503 72.503 0 0 0-40-40l18.145-71.382 93.23 93.238zm86.977-25.199L57.96 317.371 292.25 83.082l101.805 101.809zm0 0"/></svg>\
								<svg class = "editing-deleteTask"  height="14px" width="14px" fill="#9A9A9A" viewBox="-40 0 427 427.001"  xmlns="http://www.w3.org/2000/svg"><path d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"/><path d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0 0 78.796 427H268a49.233 49.233 0 0 0 35.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 0 0-11.539-28.031A39.288 39.288 0 0 0 217.797 0H129a39.288 39.288 0 0 0-28.063 11.469A39.289 39.289 0 0 0 89.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 0 1 5.676-13.895A19.26 19.26 0 0 1 129 20h88.797a19.26 19.26 0 0 1 13.926 5.605 19.244 19.244 0 0 1 5.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"/><path d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"/></svg>\
							</div>\
							<div class = "save-icons__task">\
								<img class = "save-newTask" src="img/save-file-option.png" alt = "save">\
								<img class = "cancel-editTask" src="img/cancel.png" alt = "cancel">\
						</div>\
						</div>';

		let div = document.createElement('div');
		div.className = "todolist-content";
		div.innerHTML = todoTaskContent;

		todolist.appendChild(div,todolistaddTask);			
		inputTextTask.value = '';
		taskDone();
		taskToolsDelete();
		taskToolsEddit();
		taskToolsSave();
		taskToolsCancel();
		
		objBd.task.push(textTask);
	}

	function getTitleTaks(){
		let editTitle = document.querySelectorAll('.todolist-edit');
			for (let i = 0; i < editTitle.length; i++) {
				editTitle[i].addEventListener('click', (event)=>{
					let titleInput = event.target.closest('.todolist-header').children[0].children[1].children[0],
						edditIcons = event.target.parentNode.children[0],
				    	deleteIcons = event.target.parentNode.children[1],
				    	saveIcons = event.target.parentNode.parentNode.querySelector('.save-icons'),
				    	righIcons = event.target.parentNode.parentNode;

					titleInput.removeAttribute('disabled');
					titleInput.classList.add('eddit-input');
					edditIcons.style.opacity = 0;
					deleteIcons.style.opacity = 0;
					saveIcons.style.opacity = 1;
					saveIcons.style.zIndex = 1;
					righIcons.style.opacity = 1;
					titleInput.focus();
			});
		}
		deleteTaskList();
	}

	function deleteTaskList() {
		let deleteTask = document.querySelectorAll('.todolist-delete');
			for (let i = 0; i < deleteTask.length; i++) {
				deleteTask[i].addEventListener('click', (event)=>{
					let todoList = event.target.closest('.todolist');
					todoList.remove();
				});
			}
	}

	function taskDone() {
		let allCheckBox = document.querySelectorAll('.check-task');
		for (let i = 0; i < allCheckBox.length; i++) {
			allCheckBox[i].addEventListener('click', (event)=>{
			let textTaskOnput = event.target.closest('.todolist-content__elem').children[1].children[0].value;
				if (event.target.checked) {
      				event.target.parentNode.parentNode.classList.add('done-task');
					objBd.taskDone.push(textTaskOnput);				
   				} else {
      				event.target.parentNode.parentNode.classList.remove('done-task');
      				removeBdTaskDon(event, textTaskOnput)     				
   				}
			});
		}
	}
	function removeBdTaskDon(event, textTaskOnput){
		let index = objBd.taskDone.indexOf(textTaskOnput);
		if (index > -1) {
  			objBd.taskDone.splice(index, 1);
		}
	}
	function taskToolsDelete() {
		let allButtonDelete = document.querySelectorAll('.editing-deleteTask');
		for (let i = 0; i < allButtonDelete.length; i++) {
			allButtonDelete[i].addEventListener('click', (event)=>{
				if (event.target.classList.contains('editing-deleteTask')) {
					event.target.parentNode.parentNode.parentNode.remove();
				}
			});
		}
	}

	function taskToolsEddit() {
		let allButtonEdit = document.querySelectorAll('.editing-editTask');
		for (let i = 0; i < allButtonEdit.length; i++) {
			allButtonEdit[i].addEventListener('click', (event)=>{

				let input = event.target.parentNode.parentNode.parentNode.children[1].children[0],
					defoultIcon = event.target.parentNode.parentNode.children[0],
					newIcons = event.target.parentNode.parentNode.children[1];

				input.removeAttribute('disabled');
				input.classList.add('eddit-input');
				defoultIcon.style.opacity = 0;
				newIcons.style.opacity = 1;
				newIcons.style.zIndex = 1;
				input.focus();
			});
		}
	}
	function taskToolsSave() {
		let allButtonSave = document.querySelectorAll('.save-newTask');
		for (let i = 0; i < allButtonSave.length; i++) {
			allButtonSave[i].addEventListener('click', (event)=>{
				closeEditTask(event, false);
			});
		}
	}
	function taskToolsCancel() {
		let allButtonCancel = document.querySelectorAll('.cancel-editTask');
		for (let i = 0; i < allButtonCancel.length; i++) {
			allButtonCancel[i].addEventListener('click',(event) =>{
				closeEditTask(event, true);
			});
		}
	}
	function closeEditTask(event, cancel){
		let input = event.target.parentNode.parentNode.parentNode.children[1].children[0],
			defoultIcon = event.target.parentNode.parentNode.children[0],
			newIcons = event.target.parentNode.parentNode.children[1],
			index = event.target.closest('.todolist').getAttribute('list-number');

		input.setAttribute('disabled', 'disabled');
		input.classList.remove('eddit-input');
		defoultIcon.style.opacity = 1;
		newIcons.style.zIndex = -1;
		newIcons.style.opacity = 0;

		if (cancel) {
			input.value = objBd.task[index];
		} else {
			objBd.task[index] = input.value;
		}
	}
	function edditTitleSave(){
		let saveTitle = document.querySelectorAll('.save-HeaderTitle');
		for (var i = 0; i < saveTitle.length; i++) {
			saveTitle[i].addEventListener('click', (event)=>{
				closeTitleEdit(event, false);
			});
		}
	}
	function editTitleCancel(){
		let cancelEdditTitle = document.querySelectorAll('.edit-HeaderTitle');
			for (var i = 0; i < cancelEdditTitle.length; i++) {
				cancelEdditTitle[i].addEventListener('click',(event)=>{
					closeTitleEdit(event, true);
				});
			}
	}
	function closeTitleEdit(event, cancel){
			let titleInput =  event.target.closest('.todolist-header').children[0].children[1].children[0],
				edditIcons = event.target.parentNode.children[0],
		    	deleteIcons = event.target.parentNode.children[1],
		    	saveIcons = event.target.parentNode.parentNode.querySelector('.save-icons'),
		    	righIcons = event.target.parentNode.parentNode,
		    	righIcons1 = event.target.parentNode.parentNode.children[0].children[0],
		    	righIcons2 = event.target.parentNode.parentNode.children[0].children[1],
		    	index = event.target.closest('.todolist').getAttribute('list-number');

			titleInput.setAttribute('disabled', 'disabled');
			titleInput.classList.remove('eddit-input');
			edditIcons.style.opacity = '';
			deleteIcons.style.opacity = '';
			saveIcons.style.opacity = 0;
			saveIcons.style.zIndex = -1;
			righIcons.style.opacity = '';
			righIcons1.style.opacity = '';
			righIcons2.style.opacity = '';

			if (cancel) {
				titleInput.value = objBd.title[index];
			} else {
				objBd.title[index] = titleInput.value;
			}
	}
})