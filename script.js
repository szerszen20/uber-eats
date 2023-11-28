

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
    document.getElementById("address").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeAddress() {
    document.getElementById("address").style.display = "none";
    document.body.style.overflow = "auto";
  }

  function openNow() {
    document.getElementById("now").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeNow() {
    document.getElementById("now").style.display = "none";
    document.body.style.overflow = "auto";
  }


  window.onscroll = function()
  {
    activeDelivery()
  }

  function activeDelivery() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
    let delivery = document.getElementById('delivery');
    let field = document.getElementById('field');
    let fix = document.getElementById("delivery-fix");
 
    if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
      delivery.classList.remove("delivery-address");
      field.classList.remove("delivery-address-field");
      fix.classList.remove("delivery-address-fixed");

      delivery.classList.add("delivery-active");
      field.classList.add("field-active");
      fix.classList.add("fixed-active");
      console.log("if if if");
    } else {
      delivery.classList.add("delivery-address");
      field.classList.add("delivery-address-field");
      fix.classList.add("delivery-address-fixed");

      delivery.classList.remove("delivery-active");
      field.classList.remove("field-active");
      fix.classList.remove("fixed-active");
      console.log("else");
    }
  }



  
  window.addEventListener("scroll", activeDelivery);