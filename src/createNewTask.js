// import { priorityBtnEvt, editBtnEvt, deleteBtnEvt } from "./handleBtn";
import { clearInput } from "./clearInputs";
import { handleListeners } from "./eventListeners";

const createNewTask = () => {
  let currentProject = document.querySelector(".selected-project").textContent;
  currentProject = currentProject.replace(" ", "-");
  const displayField = document.querySelector(".task-display");
  const newTaskField = document.createElement("div");
  newTaskField.classList.add("task", `${currentProject}-task`);

  displayField.appendChild(newTaskField);

  const title = document.createElement("h3");
  title.textContent = document.getElementById("task-title").value;
  title.classList.add("title");
  newTaskField.appendChild(title);

  const description = document.createElement("p");
  description.textContent = document.getElementById("task-description").value;
  description.classList.add("description");
  newTaskField.appendChild(description);

  const deadline = document.createElement("p");
  deadline.textContent = document.getElementById("task-deadline").value;
  deadline.classList.add("deadline");
  newTaskField.appendChild(deadline);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.innerHTML = '<i class="fas fa-chevron-down"></i>';
  newTaskField.appendChild(wrapper);

  const notes = document.createElement("div");
  notes.classList.add("notes", "not-visible");
  notes.textContent = document.getElementById("task-notes").value;
  wrapper.appendChild(notes);

  wrapper.addEventListener("click", () => {
    notes.classList.toggle("not-visible");
  });

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("button-wrapper");
  newTaskField.appendChild(buttonWrapper);

  let editWrapper = document.createElement("div");
  editWrapper.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  editWrapper.classList.add("edit-btn", "task-btn");
  buttonWrapper.appendChild(editWrapper);

  let trashWrapper = document.createElement("div");
  trashWrapper.innerHTML = '<i class="far fa-trash-alt"></i>';
  trashWrapper.classList.add("trash-btn", "task-btn");
  buttonWrapper.appendChild(trashWrapper);

  let priorityWrapper = document.createElement("div");
  priorityWrapper.innerHTML = '<i class="fas fa-exclamation"></i>';
  priorityWrapper.classList.add("priority-btn", "task-btn");
  buttonWrapper.appendChild(priorityWrapper);

  clearInput(event.target);

  handleListeners();
};

export { createNewTask };
