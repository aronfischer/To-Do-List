// Maybe I add a folder Section.

const createOverviewSec = function() {
  let overviewSec = document.querySelector(".overview-sec");
  let displayFolderSection = document.createElement("div");
  displayFolderSection.classList.add("display-folder-sec");
  overviewSec.appendChild(displayFolderSection);

  let createFolderSec = document.createElement("div");
  createFolderSec.classList.add("create-folder-sec");
  overviewSec.appendChild(createFolderSec);
};

const createFolder = function() {
  let currentFolder = document.createElement("div");
  currentFolder.id = "Example-folder";
};
