const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

let n; // Declare outside for reuse

while (true) {
    n = prompt("Enter your name");

    if (n === null) {
        // User clicked cancel
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you";
        break; // Exit the loop
    } else if (n.trim().length > 0) {
        // Valid name entered
        alert("Ano ba tayo, " + n + "?");
        alert("Tao?");
        alert("Bagay?");
        alert("Ang OA!");
        alert("Mwamwaaa!");
        main.style.display = "block";
        break; // Exit the loop
    } else {
        // Handle empty input
        alert("Please enter a valid name.");
    }
}
