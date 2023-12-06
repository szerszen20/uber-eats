

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
    if (window.innerWidth < 800) {
        document.getElementById("address").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeAddress() {
    if (window.innerWidth < 800) {
        document.getElementById("address").style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function openNow() {
    if (window.innerWidth < 800) {
        document.getElementById("now").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeNow() {
    if (window.innerWidth < 800) {
        document.getElementById("now").style.display = "none";
        document.body.style.overflow = "auto";
    }
    if (window.innerWidth >= 800) {
      document.getElementById("now").style.display = "none";
      document.body.style.overflow = "auto";
      document.getElementById("nowbackground").style.visibility = "hidden";
  }
}
function openNowfull() {
  if (window.innerWidth >= 800) {
      document.getElementById("now").style.display = "flex";
      document.body.style.overflow = "hidden";
      document.getElementById("nowbackground").style.visibility = "visible";
  }
}


function openList() {
  if (window.innerWidth >= 800) {
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

document.getElementById("first-button").addEventListener("click", function () {
  let listElement = document.getElementById("list");
  listElement.style.display = "none";
});

document.getElementById("second-button").addEventListener("click", function () {
  let listElement = document.getElementById("list");
  listElement.style.display = "none";
});


function toggleClass(elementId) {
  let element = document.getElementById(elementId);
  
  if (element) {
    element.classList.toggle('active');
  }
}

function toggleClearButton(inputElement, clearButton) {
  console.log("Input value:", inputElement.value.trim());

  if (inputElement.value.trim() !== "") {
    clearButton.style.display = "block";
  } else {
    clearButton.style.display = "none";
  }
}

function clearInput(inputElement, clearButton) {
  console.log("Clearing input value");
  inputElement.value = "";
  toggleClearButton(inputElement, clearButton); // Hide the clear button after clearing the input
}

// Initial state
document.querySelectorAll('.delivery-address-field').forEach(function (fieldElement) {
  let inputElement = fieldElement.querySelector('.delivery-address-input');
  let clearButton = fieldElement.querySelector('.clear-button');

  toggleClearButton(inputElement, clearButton);
});

// Change 'input' event to 'keyup'
document.querySelectorAll('.delivery-address-input').forEach(function (inputElement) {
  inputElement.addEventListener('keyup', function () {
    let fieldElement = inputElement.closest('.delivery-address-field');
    let clearButton = fieldElement.querySelector('.clear-button');
    toggleClearButton(inputElement, clearButton);
  });
});

// Add click event for each clear button
document.querySelectorAll('.clear-button').forEach(function (clearButton) {
  clearButton.addEventListener('click', function () {
    let fieldElement = clearButton.closest('.delivery-address-field');
    let inputElement = fieldElement.querySelector('.delivery-address-input');
    clearInput(inputElement, clearButton);
  });
});


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
      let fix = document.getElementById('delivery-fix');
      let now = document.getElementById('delivery-now-list');
   
      if (screenWidth < 800 && window.scrollY > 210) {
        delivery.classList.remove("delivery-address");
        field.classList.remove("delivery-address-field");
        fix.classList.remove("delivery-address-fixed");
        
        delivery.classList.add("delivery-active");
        field.classList.add("field-active");
        fix.classList.add("fixed-active");
        now.style.marginTop = "96px";
      } else {
        delivery.classList.add("delivery-address");
        field.classList.add("delivery-address-field");
        fix.classList.add("delivery-address-fixed");
  
        delivery.classList.remove("delivery-active");
        field.classList.remove("field-active");
        fix.classList.remove("fixed-active");
        now.style.marginTop = "unset";
      }

      if (screenWidth >= 800 && window.scrollY > 10) {
        navbar.classList.add("navbar-fullscreen");
      }else {
        navbar.classList.remove("navbar-fullscreen");
      }

      if (screenWidth >= 800 && window.scrollY > 500) {
        document.getElementById("delivery-fix-navbar").style.display = "flex";
      }else {
        document.getElementById("delivery-fix-navbar").style.display = "none";
      }



              // if (screenWidth >= 1200 && window.scrollY >= 500) {
              //       // Sprawdź, czy element nie został już przeniesiony
              //       if (!navbarC.contains(delivery)) {
              //           navbarC.appendChild(delivery);
              //       }
              //   } else {
              //       // Jeśli przewinięcie jest mniejsze niż 500px, przenieś z powrotem
              //       if (navbarC.contains(delivery)) {
              //           originalParent.appendChild(delivery);
              //       }
              //   }

                

    }

    function toggleClass(field, fieldN) {
      let element = document.getElementById(field);
      element.classList.toggle('field-focus');
      
      let element2 = document.getElementById(fieldN);
      element2.classList.toggle('field-focus');
    }


    window.addEventListener('scroll', checkScreenWidth);

   window.addEventListener('resize', checkScreenWidth);

