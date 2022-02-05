const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
buttons.forEach(function(button) {
    button.addEventListener("click", calculate);
});

function calculate(event) {
    const selected = event.target.value;
    if (selected === "=") {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } else if (selected === "C") {
        display.value = "";
    } else {
        display.value += selected;
    }
}
let lightTheme = "calculator.css";
let darkTheme = "darkMode.css";

function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == lightTheme) {
        theme.href = darkTheme;
    } else {
        theme.href = lightTheme;
    }
}