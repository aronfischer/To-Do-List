import { handleListeners } from "./eventListeners";
import { projectListeners } from "./eventListeners";

const createExampleProjects = function() {
  let projects = ["Company Website", "University", "Buy List"];

  for (let i = 0; i < projects.length; i++) {
    let projectDisplay = document.querySelector(".project-display");
    let projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper", "init");
    projectDisplay.appendChild(projectWrapper);

    let name = document.createElement("div");
    name.classList.add("project-name");
    name.textContent = `${projects[i]}`;
    projectWrapper.appendChild(name);

    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");
    projectWrapper.appendChild(buttonWrapper);

    let editWrapper = document.createElement("div");
    editWrapper.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    editWrapper.classList.add("edit-btn", "project-btn");
    buttonWrapper.appendChild(editWrapper);

    let trashWrapper = document.createElement("div");
    trashWrapper.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashWrapper.classList.add("trash-btn", "project-btn");
    buttonWrapper.appendChild(trashWrapper);

    let priorityWrapper = document.createElement("div");
    priorityWrapper.innerHTML = '<i class="fas fa-exclamation"></i>';
    priorityWrapper.classList.add("priority-btn", "project-btn");
    buttonWrapper.appendChild(priorityWrapper);

    handleListeners();
    projectListeners();
  }
};

export { createExampleProjects };
