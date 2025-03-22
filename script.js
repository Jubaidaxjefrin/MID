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