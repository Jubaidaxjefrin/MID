// Cart functionality
let cart = []
let total = 0

function addToCart(productName, price) {
  cart.push({ name: productName, price: price })
  total += price
  updateCart()

  // Show notification
  alert(`${productName} added to your dark collection!`)
}

function updateCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>"
    cartTotal.innerHTML = "<p>Total: $0.00</p>"
    return
  }

  let itemsHTML = "<ul>"
  cart.forEach((item) => {
    itemsHTML += <li>${item.name} - $${item.price.toFixed(2)}</li>
  })
  itemsHTML += "</ul>"

  cartItems.innerHTML = itemsHTML
  cartTotal.innerHTML = <p>Total: $${total.toFixed(2)}</p>
}

function clearCart() {
  cart = []
  total = 0
  updateCart()
  alert("Your cart has been cleared.")
}

// Product filtering
function filterProducts(category) {
  const productCards = document.querySelectorAll(".product-card")
  const categoryButtons = document.querySelectorAll(".category-btn")

  // Update active button
  categoryButtons.forEach((button) => {
    if (button.textContent.toLowerCase().includes(category)) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })

  // Filter products
  productCards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

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