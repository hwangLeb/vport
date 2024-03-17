// === NAVBAR ACTIVE AND RESPONSIVE START === //
var menuBtn = document.querySelector(".menu-btn")
var menu = document.querySelector(".nav-links")
var menuLinks = document.querySelectorAll(".nav-links li a")

menuBtn.addEventListener("click", activeClass)

function activeClass() {
  menuBtn.classList.toggle("active")
  menu.classList.toggle("active")
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked)
}

function menuItemClicked() {
  menuBtn.classList.remove("active")
  menu.classList.remove("active")
}

var homeSection = document.querySelector(".home")
window.addEventListener("scroll", scrollFunction)
window.addEventListener("load", scrollFunction)

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active")
  } else {
    homeSection.classList.remove("active")
  }
}
// === NAVBAR ACTIVE AND RESPONSIVE END === //


// === NAVBAR SCROLL START === //
function scrollToElement(elementSelector, instance = 0, duration = 1000) {
  const elements = document.querySelectorAll(elementSelector)

  if (elements.length > instance) {
    const targetElement = elements[instance]
    const targetPosition = targetElement.getBoundingClientRect().top
    const startPosition = window.scrollY
    let startTime = null

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const scrollProgress = Math.min(timeElapsed / duration, 1)
      window.scrollTo(0, startPosition + targetPosition * scrollProgress)

      if (scrollProgress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }
}


const link0 = document.getElementById("link0")
const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")

link0.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

link1.addEventListener("click", () => {
  const profileElement = document.querySelector(".profile")
  if (profileElement) {
    const yOffset = -50
    window.scrollTo({
      top: profileElement.offsetTop + yOffset,
      behavior: "smooth",
    })
  }
})

link2.addEventListener("click", () => {
  const projectsElement = document.querySelector(".skills")
  if (projectsElement) {
    const yOffset = -50
    window.scrollTo({
      top: projectsElement.offsetTop + yOffset,
      behavior: "smooth",
    })
  }
})

link3.addEventListener("click", () => {
  const projectsElement = document.querySelector(".projects")
  if (projectsElement) {
    const yOffset = -50
    window.scrollTo({
      top: projectsElement.offsetTop + yOffset,
      behavior: "smooth",
    })
  }
})

link4.addEventListener("click", () => {
  const projectsElement = document.querySelector(".contact")
  if (projectsElement) {
    const yOffset = -50
    window.scrollTo({
      top: projectsElement.offsetTop + yOffset,
      behavior: "smooth",
    })
  }
})
// === NAVBAR SCROLL END === //


// === LOADERS SHEEESH START=== //
document.body.style.overflow = 'hidden'
window.addEventListener('load', function() {
  setTimeout(function() {
    var loadingOverlay = document.querySelector('.loading-overlay')
    loadingOverlay.classList.add('loading-overlay-animation')
    setTimeout(function() {
      loadingOverlay.classList.add('hidden')
      document.body.style.overflow = 'auto'
    }, 1000)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, 1500)
})
// === LOADERS END === //


// === CERTIFICATES START === //
let filterItems = document.querySelector('.items-links')
let filterImages = document.querySelectorAll('.cert-img')

window.addEventListener('load', () => {
  filterItems.addEventListener('click', (selectedItem) => {
    if (selectedItem.target.classList.contains('item-link')) {
      document.querySelector('.menu-active').classList.remove('menu-active')

      selectedItem.target.classList.add('menu-active')

      let filterName = selectedItem.target.getAttribute('data-name')

      filterImages.forEach((image) => {
        let filterImages = image.getAttribute('data-name')
        if (filterImages === filterName || filterName === 'all') {
          image.style.display = 'block'
        } else {
          image.style.display = 'none'
        }
      })
    }
  })
})
// === CERTIFICATES END === //


// === TESTIMONIALS SCROLL START === //
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500, 
  },
})
// === TESTIMONIALS SCROLL END === //

// / === CIRCLE CURSOR START === //
const cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX
  const posY = e.clientY

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"})

})
// === CIRCLE CURSOR END === //
