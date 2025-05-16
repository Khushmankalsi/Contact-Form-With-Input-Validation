const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Grab inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  const terms = document.getElementById("terms");

  // Error divs
  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    subject: document.getElementById("subjectError"),
    phone: document.getElementById("phoneError"),
    message: document.getElementById("messageError"),
    terms: document.getElementById("termsError"),
  };

  // Clear previous messages
  Object.values(errors).forEach(el => el.innerText = "");
  [name, email, subject, phone, message].forEach(field => {
    field.classList.remove("error", "valid");
  });
  terms.classList.remove("error");

  let isValid = true;

  // Validation
  if (name.value.trim() === "") {
    errors.name.innerText = "Name is required.";
    name.classList.add("error");
    isValid = false;
  } else {
    name.classList.add("valid");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    errors.email.innerText = "Valid email is required.";
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.add("valid");
  }

  if (subject.value.trim() === "") {
    errors.subject.innerText = "Subject is required.";
    subject.classList.add("error");
    isValid = false;
  } else {
    subject.classList.add("valid");
  }

  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone.value.trim())) {
    errors.phone.innerText = "Valid phone number is required.";
    phone.classList.add("error");
    isValid = false;
  } else {
    phone.classList.add("valid");
  }

  if (message.value.trim().length < 10) {
    errors.message.innerText = "Message must be at least 10 characters.";
    message.classList.add("error");
    isValid = false;
  } else {
    message.classList.add("valid");
  }

  if (!terms.checked) {
    errors.terms.innerText = "You must agree to the terms and conditions.";
    terms.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    [name, email, subject, phone, message].forEach(field => {
      field.classList.remove("valid");
    });
  }
});
