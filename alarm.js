//ALARM JAVASCRIPT
let addAlarmButton = document.querySelector(".action-button img")
let headerTitle = document.querySelector(".header2")
addAlarmButton.addEventListener("click", (e) => {
    document.querySelector(".main-display").style.display = "none";
    headerTitle.textContent = "New Alarm"
})
