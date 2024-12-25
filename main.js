const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

let name; // Variable to store user input

while (true) {
    name = prompt("Enter your name:");

    if (name === null) {
        // User clicked Cancel
        main.style.display = "none";
        cancel.style.display = "block";
        msg.textContent = "Thank you for visiting!";
        break; // Exit loop
    } else if (name.trim().length > 0) {
        // Valid name entered
        alert("Ano ba tayo, " + name + "?");
        alert("Tao?");
        alert("Bagay?");
        alert("Ang OA!");
        alert("Mwamwaaa!");
        main.style.display = "block";
        cancel.style.display = "none"; // Hide cancel message
        break; // Exit loop
    } else {
        // Handle empty input
        alert("Please enter a valid name.");
    }
}
