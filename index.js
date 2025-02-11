function getUserDetails() {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let totalPayment = prompt("Enter total payment:");
    
    let contactNumber;
    if (age < 18) {
        contactNumber = prompt("Enter father's number:");
    } else {
        contactNumber = prompt("Enter personal number:");
    }

    document.getElementById("name").innerText = name;
    document.getElementById("age").innerText = age;
    document.getElementById("totalPayment").innerText = totalPayment;
    document.getElementById("contact").innerText = contactNumber;
}


