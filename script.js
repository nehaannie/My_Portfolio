'use strict';

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar visibility on button click
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Event listener for select items
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.textContent.toLowerCase();
    selectValue.textContent = item.textContent;
    toggleActive(select, "active");
    filterItemsByCategory(selectedValue);
  });
});

// Toggle select dropdown visibility
if (select) {
  select.addEventListener("click", () => {
    toggleActive(select, "active");
  });
}

// Event listener for filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.textContent.toLowerCase();
    filterItemsByCategory(selectedValue);
    updateActiveFilterButton(btn);
  });
});

// Filter items by category
function filterItemsByCategory(category) {
  filterItems.forEach(item => {
    // Ensure categories are matched correctly and account for case differences
    const itemCategory = item.dataset.category.toLowerCase();
    if (category === 'all' || itemCategory === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Update active filter button
function updateActiveFilterButton(activeBtn) {
  filterBtns.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

// Toggle class function
function toggleActive(element, className) {
  element.classList.toggle(className);
}

// Navigation links and sections
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Navigation click handler
navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();
    pages.forEach(page => {
      page.classList.toggle("active", page.getAttribute("data-page") === targetPage);
    });
    navigationLinks.forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
    window.scrollTo(0, 0);
  });
});
