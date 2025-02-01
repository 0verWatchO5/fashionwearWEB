function showAlert(){
    alert("Login to proceed");
}
function sub(){
    alert("Form Sumbitted Successfully!");
}

//appear footer on scroll
window.addEventListener('scroll', function() {
    var footer = document.querySelector('.hidden-footer');
    var contentHeight = document.querySelector('.ah2').offsetHeight;
    var scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition >= contentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

//home page image slide on arrow click
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    const slider = document.querySelector('.slider');

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Initial display
showSlide(slideIndex);

//Q&A Forum
// Function to post a question
function postQuestion() {
    const title = document.getElementById('question-title').value;
    const description = document.getElementById('question-description').value;

    if (!title || !description) {
        alert("Please fill out both the title and description.");
        return;
    }

    // Create a container for the new question
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question';

    // Add the question title
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = title;
    questionContainer.appendChild(questionTitle);

    // Add the question description
    const questionDescription = document.createElement('p');
    questionDescription.textContent = description;
    questionContainer.appendChild(questionDescription);

    // Create a simple form for posting an answer
    const answerForm = document.createElement('div');
    answerForm.className = 'answer-form';
    answerForm.innerHTML = `
        <input type="text" class="answer-name" placeholder="Your Name">
        <textarea class="answer-text" placeholder="Your Answer..."></textarea>
        <button onclick="postAnswer(this)">Post Answer</button>
    `;
    questionContainer.appendChild(answerForm);

    // Create a container for answers
    const answersContainer = document.createElement('div');
    answersContainer.className = 'answers';
    questionContainer.appendChild(answersContainer);

    // Add the new question to the list
    document.getElementById('questions-list').appendChild(questionContainer);

    // Clear the input fields
    document.getElementById('question-title').value = '';
    document.getElementById('question-description').value = '';
}

// Function to post an answer
function postAnswer(button) {
    const answerForm = button.parentElement;
    const name = answerForm.querySelector('.answer-name').value;
    const answerText = answerForm.querySelector('.answer-text').value;

    if (!name || !answerText) {
        alert("Please fill out both your name and your answer.");
        return;
    }

    // Create the answer element
    const answer = document.createElement('p');
    answer.innerHTML = `<strong>${name}:</strong> ${answerText}`;

    // Add the answer to asked question
    const answersContainer = answerForm.nextElementSibling;
    answersContainer.appendChild(answer);

    // Clear the input fields
    answerForm.querySelector('.answer-name').value = '';
    answerForm.querySelector('.answer-text').value = '';
}


// Function to add an item to the cart and store it in localStorage
function addToCart(item) {
    // Retrieve the existing cart from localStorage, or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(`${item.name} added to cart`);

    // Optionally, redirect to the cart page
    window.location.href = 'cart.html'; // Replace with the actual cart page URL
}

// Function to handle adding items to the cart when a button is clicked
function setupAddToCartButtons() {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the closest item card
            const itemCard = button.closest('.item-card');

            // Create an item object based on the card's content
            const item = {
                name: itemCard.querySelector('h3').innerText,
                price: itemCard.querySelector('.price').innerText,
                imageSrc: itemCard.querySelector('img').src,
                sizes: itemCard.querySelector('p').innerText
            };

            // Add the item to the cart
            addToCart(item);
        });
    });
}


 // Change the type of input to password or text
 function Toggle() {
    let temp = document.getElementById("typepass");
     
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}


function validatePassword(password) {
    const minLength = 8;
    const maxLength = 15;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
        return "Password must include at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must include at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must include at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must include at least one special character.";
    }
    if (password.length > maxLength) {
        return "Password must not exceed the limit of 15 characters."
    }
    return "Password is valid.";
}

