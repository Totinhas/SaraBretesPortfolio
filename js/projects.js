function toggleOptions(target) {
  const filterId = target.id;
  const filterItems = document.querySelectorAll("." + filterId);
  for (let i = 0; i < filterItems.length; i++) {
    if (target.checked) {
      filterItems[i].style.display = "inline-block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

function selectFilter(target) {
  const filterOptions = document.getElementsByClassName("filterOptions");
  const selectAllOption = document.getElementById("all");
  let count = 0;
  for (let i = 0; i < filterOptions.length; i++) {
    if (filterOptions[i].checked === true) {
      count++;
    }
  }
  if (count === filterOptions.length) {
    selectAllOption.checked = true;
  } else {
    selectAllOption.checked = false;
  }
  toggleOptions(target);
}

function selectAll(target) {
  const filterOptions = document.getElementsByClassName("filterOptions");
  for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].checked = target.checked;
    toggleOptions(filterOptions[i]);
  }
}

function filterWorkItems(tag) {
  const tagId = tag.id;
  const workItems = document.getElementsByClassName("work");
  let countDisplayed = 0;
  const nothingToShow = document.getElementById("nothingToShow");
  resetFilterItems();
  tag.classList.add("selected");
  for (let i = 0; i < workItems.length; i++) {
    if (workItems[i].classList.contains(tagId)) {
      workItems[i].style.display = "block";
      countDisplayed++;
    } else {
      workItems[i].style.display = "none";
    }
  }
  if (countDisplayed > 0) {
    nothingToShow.style.display = "none";
  } else {
    nothingToShow.style.display = "block";
  }
}

function resetFilterItems() {
  const filterItems = document.getElementsByClassName("filterItem");

  for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].classList.remove("selected");
  }
}
