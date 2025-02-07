
function getUserDetails() {
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let totalPayment = prompt("Enter total payment:");
    let contactNumber;
    
    if (age < 18) {
        contactNumber = prompt("Enter father's number:");
    } else {
        contactNumber = prompt("Enter personal number:");
    }
    
    document.getElementById("output").innerHTML = `
        <p>Name: ${name}</p>
        <p>Total Payment: ${totalPayment}</p>
        <p>Contact: ${contactNumber}</p>
    `;
}

document.addEventListener("DOMContentLoaded", getUserDetails);
