const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // show light icon
  themeToggleLightIcon.classList.remove("hidden");
} else {
  // show light icon
  themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // toggle icons
  themeToggleLightIcon.classList.toggle("hidden");
  themeToggleDarkIcon.classList.toggle("hidden");

  // if is set in localStorage
  if (localStorage.getItem("color-theme")) {
    // check theme, add/remove "dark" class and save the preference in localStorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    /**
     * if it's our first time on the page, then we won't have anything set in
     * localStorage, so we check if the <html> element contains the "dark" class
     * and then we create/save the key/value theme pair in localStorage.
     */
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
