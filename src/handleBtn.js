import { handleListeners } from "./eventListeners";
import { updateLocalStorage } from "./updateLocalStorage";

const priorityBtnEvt = function() {
  this.classList.toggle("important");
  this.parentNode.parentNode.childNodes[0].classList.toggle("important");
  updateLocalStorage();
};

const editBtnEvt = function() {
  const currentTitle = this.parentNode.parentNode.childNodes[0].textContent;

  document
    .querySelectorAll(".edit-btn")
    .forEach(elem => elem.removeEventListener("click", editBtnEvt), this);

  if (this.classList.contains("edit-btn")) {
    if (
      this.classList.contains("task-btn") ||
      this.classList.contains("project-btn")
    ) {
      if (this.parentNode.parentNode.classList.contains("project-wrapper")) {
        let editNameLabel = this.parentNode.parentNode.childNodes[0];
        editNameLabel.innerHTML = `<input class="edit-project-title" value="${currentTitle}" type="text">`;
        editNameLabel.classList.add("edited");

        document.onkeydown = function(evt) {
          var keyCode = evt
            ? evt.which
              ? evt.which
              : evt.keyCode
            : event.keyCode;
          if (keyCode == 13) {
            let newTitle = document.querySelector(".edited").childNodes[0]
              .value;
            editNameLabel.textContent = `${newTitle}`;

            changeTaskClass(newTitle, currentTitle);
            removeAddEditedProjectBtn();
            handleListeners();
          }
        };

        let buttonWrapper = this.parentNode;
        buttonWrapper.removeChild(this);

        let newButtonDiv = document.createElement("div");
        newButtonDiv.classList.add("add-btn", "project-btn");
        newButtonDiv.innerHTML = '<i class="fas fa-plus"></i>';
        buttonWrapper.appendChild(newButtonDiv);

        document
          .querySelector(".add-btn")
          .addEventListener("click", function() {
            let newTitle = document.querySelector(".edited").childNodes[0]
              .value;
            editNameLabel.textContent = `${newTitle}`;
            changeTaskClass(newTitle, currentTitle);
            removeAddEditedProjectBtn();
            handleListeners();
          });
      } else if (this.parentNode.parentNode.classList.contains("task")) {
        const target = this;
        const taskContainer = this.parentNode.parentNode;
        const notesWrapper = this.parentNode.previousSibling;

        let cloneNotesWrapper = notesWrapper.cloneNode(true);

        for (let i = 3; i >= 0; i--) {
          let nameField = target.parentNode.parentNode.childNodes[i];
          let currentTaskTitle = nameField.textContent;
          let nameInputField = document.createElement("input");
          nameInputField.classList.add("edit-task-input");
          nameInputField.value = `${currentTaskTitle}`;
          nameField.innerHTML = `${nameInputField}`;
          taskContainer.insertBefore(nameInputField, nameField);
          nameField.style.display = "none";
        }

        let buttonWrapper = this.parentNode;
        this.style.display = "none";

        let newButtonDiv = document.createElement("div");
        newButtonDiv.classList.add("add-btn", "task-btn");
        newButtonDiv.innerHTML = '<i class="fas fa-plus"></i>';
        buttonWrapper.appendChild(newButtonDiv);

        document
          .querySelector(".add-btn")
          .addEventListener("click", function() {
            for (let i = 0; i < 3; i++) {
              let child = taskContainer.childNodes[i];
              if (child.classList.contains("edit-task-input")) {
                let newTitle = child.value;
                let newParent = child.nextSibling;
                newParent.textContent = `${newTitle}`;
                taskContainer.removeChild(child);
                newParent.style.display = "block";
              }
            }

            let notesInput = taskContainer.childNodes[3];
            let notesTitle = notesInput.value;
            cloneNotesWrapper.childNodes[1].textContent = `${notesTitle}`;
            taskContainer.insertBefore(cloneNotesWrapper, notesWrapper);
            taskContainer.removeChild(notesWrapper);
            taskContainer.removeChild(notesInput);

            cloneNotesWrapper.addEventListener("click", e => {
              let notes = cloneNotesWrapper.childNodes[1];
              notes.classList.toggle("not-visible");
            });

            buttonWrapper.removeChild(this);
            target.style.display = "block";

            handleListeners();
          });
      }
    }
  }
};

const changeTaskClass = function(newTitle, currentTitle) {
  let newTaskClass = newTitle.replace(" ", "-");
  let oldTaskClass = currentTitle.replace(" ", "-");

  let thisProjectsTasks = document.querySelectorAll(`.${oldTaskClass}-task`);

  thisProjectsTasks.forEach(elem => elem.classList.add(`${newTaskClass}-task`));
  thisProjectsTasks.forEach(elem =>
    elem.classList.remove(`${oldTaskClass}-task`)
  );
  updateLocalStorage();
};

const removeAddEditedProjectBtn = function() {
  let buttonWrapper = document.querySelector(".edited").parentNode
    .childNodes[1];
  let addBtn = buttonWrapper.querySelector(".add-btn");
  buttonWrapper.removeChild(addBtn);

  let newEditButton = document.createElement("div");
  newEditButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  newEditButton.classList.add("edit-btn", "project-btn");
  buttonWrapper.insertBefore(
    newEditButton,
    document.querySelector(".edited").parentNode.childNodes[1].childNodes[0]
  );
  document.querySelector(".edited").classList.remove("edited");
  updateLocalStorage();
};

const deleteBtnEvt = function() {
  if (this.classList.contains("trash-btn")) {
    if (
      this.classList.contains("task-btn") ||
      this.classList.contains("project-btn")
    ) {
      if (
        this.parentNode.parentNode.classList.contains("task") ||
        this.parentNode.parentNode.classList.contains("project-wrapper")
      ) {
        let deleteDiv = this.parentNode.parentNode;
        let parent = deleteDiv.parentNode;
        parent.removeChild(deleteDiv);
      }
    }
  }
  updateLocalStorage();
};

export { priorityBtnEvt, editBtnEvt, deleteBtnEvt };
