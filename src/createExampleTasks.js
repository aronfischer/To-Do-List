import { handleListeners } from "./eventListeners";
import { displayProjectLabel } from "./displayProjectLabel";

const createExampleTasks = function() {
  document.querySelectorAll(".project-name").forEach(elem => {
    if (elem.textContent === "University") {
      elem.parentNode.classList.add("selected-project");
      displayProjectLabel();
    }
  });

  let projectTitle = document.querySelector(".selected-project").textContent;

  let taskTitles = [
    "Math Homework",
    "English Presentation",
    "Biology Paper",
    "Chemistry Final Exam"
  ];
  let taskDescriptions = [
    "Focus on doing the reading part",
    "It's a 30 minute Presentation with a handout",
    "Don't forget it's twenty pages :/ about trees",
    "Study more this time, you failed the last one"
  ];
  let taskDeadlines = ["20.11.19", "24.11.19", "03.12.19", "22.12.19"];
  let taskNotes = [
    "Page 22 in your Assignment book",
    "Topic: English history",
    "Trees, trees, trees",
    "It's going to be about everything from chapter 1 to chapter 20"
  ];

  for (let i = 0; i < taskTitles.length; i++) {
    const displayField = document.querySelector(".task-display");
    const newTaskField = document.createElement("div");
    newTaskField.classList.add("task", `${projectTitle}-task`);

    displayField.appendChild(newTaskField);

    const title = document.createElement("h3");
    title.textContent = `${taskTitles[i]}`;
    title.classList.add("title");
    newTaskField.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `${taskDescriptions[i]}`;
    description.classList.add("description");
    newTaskField.appendChild(description);

    const deadline = document.createElement("p");
    deadline.textContent = `${taskDeadlines[i]}`;
    deadline.classList.add("deadline");
    newTaskField.appendChild(deadline);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = '<i class="fas fa-chevron-down"></i>';
    newTaskField.appendChild(wrapper);

    const notes = document.createElement("div");
    notes.classList.add("notes", "not-visible");
    notes.textContent = `${taskNotes[i]}`;
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

    handleListeners();
  }
};

export { createExampleTasks };
