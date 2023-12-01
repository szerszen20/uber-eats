

  function openhamburger() {
    document.getElementById("menu").classList.add("open");
    document.getElementById("hamburger").classList.add("open2");
    document.body.style.overflow = "hidden";
  }

  function closehamburger() {
    document.getElementById("menu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open2");
    document.body.style.overflow = "auto";
  }




  function openAddress() {
    if (window.innerWidth < 700) {
        document.getElementById("address").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeAddress() {
    if (window.innerWidth < 700) {
        document.getElementById("address").style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function openNow() {
    if (window.innerWidth < 700) {
        document.getElementById("now").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeNow() {
    if (window.innerWidth < 700) {
        document.getElementById("now").style.display = "none";
        document.body.style.overflow = "auto";
    }
}
function openNowfull() {
  if (window.innerWidth >= 1200) {
      document.getElementById("now").style.display = "flex";
      document.body.style.overflow = "hidden";
  }
}

function closeNowfull() {
  if (window.innerWidth >= 1200) {
      document.getElementById("now").style.display = "none";
      document.body.style.overflow = "auto";
  }
}

function openList() {
  if (window.innerWidth >= 1200) {
    let listElement = document.getElementById("list");
    
    // Sprawdzanie aktualnego stanu widoczności
    let isListVisible = getComputedStyle(listElement).display === "flex";
    
    if (!isListVisible) {
      listElement.style.display = "flex";
    } else {
      listElement.style.display = "none";
    }
  }
}

document.getElementById("first-button").addEventListener("click", function() {
  let listElement = document.getElementById("list");
  listElement.style.display = "none";
});


function toggleClearButton() {
  let inputElement = document.querySelector('.delivery-address-input');
  let clearButton = document.getElementById('clearBtn');

  console.log("Input value:", inputElement.value.trim());

  if (inputElement.value.trim() !== "") {
      console.log("Showing clear button");
      clearButton.style.display = "block";
  } else {
      console.log("Hiding clear button");
      clearButton.style.display = "none";
  }
}

function clearInput() {
  let inputElement = document.querySelector('.delivery-address-input');
  console.log("Clearing input value");
  inputElement.value = "";
  toggleClearButton(); // Hide the clear button after clearing the input
}

// Initial state
toggleClearButton();

// Change 'input' event to 'keyup'
var inputElement = document.querySelector('.delivery-address-input');
inputElement.addEventListener('keyup', toggleClearButton);



  window.onscroll = function()
  {

    checkScreenWidth();

  }


    checkScreenWidth();

    function checkScreenWidth() {

      let screenWidth = window.innerWidth;
      let navbar = document.getElementById("navbar");
      let delivery = document.getElementById('delivery');
      let field = document.getElementById('field');
      let fix = document.getElementById("delivery-fix");
   
      if (screenWidth < 700 && window.scrollY > 210) {
        delivery.classList.remove("delivery-address");
        field.classList.remove("delivery-address-field");
        fix.classList.remove("delivery-address-fixed");
        
        delivery.classList.add("delivery-active");
        field.classList.add("field-active");
        fix.classList.add("fixed-active");
        console.log("if if if  telefon");
      } else {
        delivery.classList.add("delivery-address");
        field.classList.add("delivery-address-field");
        fix.classList.add("delivery-address-fixed");
  
        delivery.classList.remove("delivery-active");
        field.classList.remove("field-active");
        fix.classList.remove("fixed-active");
        console.log("else telefon");
      }

      if (screenWidth >= 1200 && window.scrollY > 10) {
        navbar.classList.add("navbar-fullscreen");
        console.log('Ekran o szerokości min. 1200px');


      }else {
        navbar.classList.remove("navbar-fullscreen");
        console.log('Ekran o szerokości mniejszej niż 1200px');
      }

    }


    function toggleClass(field) {
      let element = document.getElementById(field);
      element.classList.toggle('field-focus');
    }




    window.addEventListener('scroll', checkScreenWidth);

   window.addEventListener('resize', checkScreenWidth);