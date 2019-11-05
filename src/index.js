import { createNewTask } from "./createNewTask";
import { createNewProject } from "./createNewProject";
import { createExampleProjects } from "./createExampleProject";
import { clearInput } from "./clearInputs";
import { createExampleTasks } from "./createExampleTasks";
import { handleListeners, projectListeners } from "./eventListeners";
import { updateLocalStorage } from "./updateLocalStorage";

const manageWhenLocalStorage = function() {
  toggleCreateTaskEvt();
  createNewTaskEvt();
  cancelCreateNewTask();

  handleListeners();
  projectListeners();
  addMissingListenersIfLocalStorage();
};

const addMissingListenersIfLocalStorage = function() {
  document.querySelectorAll(".notes").forEach(elem => {
    elem.parentNode.addEventListener("click", () => {
      let currentNote = event.target.nextSibling;
      currentNote.classList.toggle("not-visible");
    });
  });
};

const toggleCreateTaskEvt = function() {
  document
    .querySelector(".toggle-create-task")
    .addEventListener("click", () => {
      event.target.parentNode.style.display = "none";
      document.querySelector(".create-task").style.display = "grid";
    });
};

const createNewTaskEvt = function() {
  document.querySelector(".submit-btn").addEventListener("click", () => {
    /* Take the values of the input field and add them to a new row */
    createNewTask();
    document.querySelector(".create-task").style.display = "none";
    document.querySelector(".toggle-create-task").style.display = "block";
  });
};

const cancelCreateNewTask = function() {
  document.querySelector(".cancel-task-btn").addEventListener("click", () => {
    clearInput(event.target);
    document.querySelector(".create-task").style.display = "none";
    document.querySelector(".toggle-create-task").style.display = "block";
  });
};

document.querySelector(".cancel-project-btn").addEventListener("click", () => {
  clearInput(event.target);
});

document
  .querySelector(".submit-project-btn")
  .addEventListener("click", createNewProject);

if (localStorage.getItem("projectSection")) {
  document.querySelector(".project-sec").innerHTML = localStorage.getItem(
    "projectSection"
  );
  manageWhenLocalStorage();

  document
    .querySelector(".cancel-project-btn")
    .addEventListener("click", () => {
      clearInput(event.target);
    });

  document
    .querySelector(".submit-project-btn")
    .addEventListener("click", createNewProject);
} else {
  const manage = (() => {
    toggleCreateTaskEvt();
    createNewTaskEvt();
    cancelCreateNewTask();

    createExampleProjects();
    createExampleTasks();
  })();
}

export { updateLocalStorage };
