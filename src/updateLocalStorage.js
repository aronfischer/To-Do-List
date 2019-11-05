const updateLocalStorage = function() {
  let projSec = document.querySelector(".project-sec").innerHTML;
  JSON.stringify(projSec);
  localStorage.setItem("projectSection", projSec);
};

export { updateLocalStorage };
