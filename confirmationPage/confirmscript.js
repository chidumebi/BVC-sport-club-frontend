// Get the reference to the HTML element with the ID 'info'
const info = document.querySelector(".userDetails");

// Parse the URL search parameters to extract user details
const userDetails = new URLSearchParams(window.location.search);
const userID = userDetails.get('IDNumber');
const userName = userDetails.get('Name');
const userAddress = userDetails.get('Address');
const status = userDetails.get('Status');

// Construct the HTML content using user details
info.innerHTML = `
    <p><b>ID Number:</b> ${userID}</p>
    <p><b>Name:</b> ${userName}</p>
    <p><b>Address:</b> ${userAddress}</p>
    <p><b>Status:</b> ${status}</p>
`;

// Conditional statements 
if (status === "Volunteer") {
    info.innerHTML += `<p><b>Fee:</b> No Fee</p>`;
} else if (status === "Staff") {
    info.innerHTML += `<p><b>Fee:</b> $50</p>`;
} else if (status === "Student") {
    info.innerHTML += `<p><b>Fee:</b> $10</p>`;
}else if(status==="undefined"){
    info.innerHTML += `<p>please input</p>`;
}
