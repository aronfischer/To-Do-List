const clearInput = function(target) {
  if (
    target.parentNode === document.querySelector(".submit-project-btn") ||
    target.parentNode === document.querySelector(".cancel-project-btn")
  ) {
    document.getElementById("project-input").value = "";
  } else if (
    target.parentNode === document.querySelector(".submit-btn") ||
    target.parentNode === document.querySelector(".cancel-task-btn")
  ) {
    document.getElementById("task-title").value = "";
    document.getElementById("task-deadline").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-notes").value = "";
  }
};

export { clearInput };
