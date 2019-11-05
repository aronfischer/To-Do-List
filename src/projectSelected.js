import { displayProjectLabel } from "./displayProjectLabel";

const projectSelected = function() {
  let initSelected = document.querySelector(".selected-project");
  let initSelectedTasksTitle = initSelected.textContent;
  initSelectedTasksTitle = initSelectedTasksTitle.replace(" ", "-");

  let initSelectedTasks = document.querySelectorAll(
    `.${initSelectedTasksTitle}-task`
  );

  let newSelected;
  let newSelectedTasks;

  if (initSelected && !this.parentNode.classList.contains("selected-project")) {
    // Remove class from old selected project
    initSelected.classList.remove("selected-project");
    // Hide old selected tasks
    initSelectedTasks.forEach(elem => elem.classList.add("not-visible"));
    // Add class to clicked project (set clicked to selected)
    this.parentNode.classList.add("selected-project");
    // Display tasks from new selected
    let newSelectedTitle = document.querySelector(".selected-project")
      .textContent;
    newSelected = newSelectedTitle.replace(" ", "-");
    newSelectedTasks = document.querySelectorAll(`.${newSelected}-task`);
    newSelectedTasks.forEach(elem => elem.classList.remove("not-visible"));
  }
  displayProjectLabel();
};

export { projectSelected };
