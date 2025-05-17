 function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = ["name", "email", "phone", "subject", "message"];
    let valid = true;

    fields.forEach(id => {
      const input = document.getElementById(id);
      const error = document.getElementById(id + "Error");
      const value = input.value.trim();

      if (id === "phone") {
        if (!/^\d{10}$/.test(value)) {
          input.classList.add("error");
          input.classList.remove("valid");
          error.textContent = "Invalid phone number (must be exactly 10 digits)";
          valid = false;
          return;
        }
      } else if (id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          input.classList.add("error");
          input.classList.remove("valid");
          error.textContent = "Invalid email format";
          valid = false;
          return;
        }
      } else if (!value) {
        input.classList.add("error");
        input.classList.remove("valid");
        error.textContent = "This field is required";
        valid = false;
        return;
      }

      input.classList.remove("error");
      input.classList.add("valid");
      error.textContent = "";
    });

    const terms = document.getElementById("terms");
    const termsError = document.getElementById("termsError");
    if (!terms.checked) {
      termsError.textContent = "You must accept the terms and conditions.";
      terms.classList.add("error");
      valid = false;
    } else {
      termsError.textContent = "";
      terms.classList.remove("error");
    }

    if (valid) {
      alert("Form submitted successfully!");
      // You can send data here
    }
  });