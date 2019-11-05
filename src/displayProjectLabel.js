const displayProjectLabel = function() {
  let projectLabel = document.querySelector(".project-name-label");
  let currentProject = document.querySelector(".selected-project");
  let currentProjectTitle = currentProject.childNodes[0].textContent;

  projectLabel.textContent = `${currentProjectTitle}`;
};

export { displayProjectLabel };
