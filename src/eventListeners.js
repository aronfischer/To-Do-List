import { editBtnEvt, deleteBtnEvt, priorityBtnEvt } from "./handleBtn";
import { projectSelected } from "./projectSelected";
import { closeFolder } from "./closeFolder";
import { updateLocalStorage } from "./updateLocalStorage";

function handleListeners() {
  document
    .querySelectorAll(".edit-btn")
    .forEach(elem => elem.removeEventListener("click", editBtnEvt), this);

  document
    .querySelectorAll(".edit-btn")
    .forEach(elem => elem.addEventListener("click", editBtnEvt), this);

  document
    .querySelectorAll(".trash-btn")
    .forEach(elem => elem.removeEventListener("click", deleteBtnEvt), this);

  document
    .querySelectorAll(".trash-btn")
    .forEach(elem => elem.addEventListener("click", deleteBtnEvt), this);

  document
    .querySelectorAll(".priority-btn")
    .forEach(elem => elem.removeEventListener("click", priorityBtnEvt), this);

  document
    .querySelectorAll(".priority-btn")
    .forEach(elem => elem.addEventListener("click", priorityBtnEvt), this);

  document
    .querySelector(".close-folder-btn")
    .addEventListener("click", closeFolder);

  updateLocalStorage();
}

const projectListeners = function() {
  document
    .querySelectorAll(".project-name")
    .forEach(elem => elem.addEventListener("click", projectSelected), this);
};

export { handleListeners, projectListeners };
