// Contact form submission
function submitForm() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
  
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }
  
  
    document.getElementById("form-message").classList.remove("hidden")
  
    // Clear form
    document.getElementById("contactForm").reset()
  
    // Hide message after 5 seconds
    setTimeout(() => {
      document.getElementById("form-message").classList.add("hidden")
    }, 5000)
  }

// Newsletter subscription
function subscribeNewsletter() {
  const email = document.getElementById("email-subscribe").value

  if (!email) {
    alert("Please enter your email address")
    return
  }

  document.getElementById("subscribe-message").classList.remove("hidden")
  document.getElementById("email-subscribe").value = ""

  // Hide message after 5 seconds
  setTimeout(() => {
    document.getElementById("subscribe-message").classList.add("hidden")
  }, 5000)
}

// Home page button functions

function showStory() {
  alert(
    "Ultraviolet was founded by a passionate gothic fashion enthusiast who wanted to create high-quality, ethically produced gothic items that celebrate the beauty of darkness.",
  )
}