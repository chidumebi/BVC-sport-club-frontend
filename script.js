


let slider = document.querySelector(".cardSlider");

let prevBtn = document.querySelector(".prev");

let nextBtn = document.querySelector(".next");

let skipBtn = document.querySelector(".controls ul");

//let skipSelect = document.querySelector(".controls .selected");

let cardIndex = 0;

document.querySelectorAll(".controls li").forEach(function(skipSlide, skipIndex) {
    skipSlide.addEventListener("click", function() {
        cardIndex = skipIndex;
        //removes precious skip Button from selected class
        skipBtn.querySelector('.selected').classList.remove('selected');
        //adds current skip Button to selected class
        skipSlide.classList.add("selected");
        slider.style.transform ="translate(" + cardIndex * -25 +"%)";
    });
});

nextBtn.addEventListener("click", function() {
  cardIndex = (cardIndex < 3) ? cardIndex + 1 : 3;
  skipBtn.querySelector('.selected').classList.remove('selected');
  skipBtn.children[cardIndex].classList.add("selected");
  slider.style.transform ="translate(" + cardIndex * -25 +"%)";
 })

prevBtn.addEventListener("click", function() {
  cardIndex = (cardIndex > 0) ? cardIndex - 1 : 0;
  
  skipBtn.querySelector('.selected').classList.remove('selected');
  skipBtn.children[cardIndex].classList.add("selected");
  slider.style.transform ="translate(" + cardIndex * -25 +"%)";
 })



// Program to display the form
let displayFormBtn = document.getElementById("pageRegister");
let form = document.getElementById("eventForm");
let main = document.querySelector(".cardContainer");
let container = document.getElementById("formContainer")

displayFormBtn.addEventListener("click", displayForm);

function displayForm()
{
    if (form.style.display === "" || form.style.display === "none") { 
        // If the form is hidden or its display property is not set, show it
        main.style.display = "none";
        form.style.display = "block";
        container.style.display = "block";

        //animating the form display
        
    } 

    form.classList.add("grow");
    
}



// for the request of the backend

document.addEventListener('DOMContentLoaded', function() {
    let formBtn = document.querySelector(".formRegister");
    formBtn.addEventListener('click', function(event) {
        event.preventDefault();

        
        let userID = document.getElementById("id").value;
        let userName = document.getElementById("name").value;
        let userAddress = document.getElementById("address").value;
        let status = document.querySelector(".statVal").value;
        
        //Creating an object
        let userData = {
            userID: userID,
            userName: userName,
            userAddress: userAddress,
            status: status
        };
       
        //const appUrl="https://bvc-sport-club-backend-1.onrender.com/formDataEntry";
        
         fetch("https://bvc-sport-club-backend-1.onrender.com/formDataEntry", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
       // catching the error
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Error loading response");
            }
            return response.json();
        })
        .then(function(data) {
            console.log("Data saved successfully:" ,data);
            window.location.href = "confirmationPage/confirmIndex.html?IDNumber=" + encodeURIComponent(data.userID) +
                "&Name=" + encodeURIComponent(data.userName) +
                "&Address=" + encodeURIComponent(data.userAddress) +
                "&Status=" + encodeURIComponent(data.status);
        })
        .catch(function(error) {
            console.error("Error saving data:" ,error);
        });
    });
});


