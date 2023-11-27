function openbackground() {
    document.getElementById("bg").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closebackground() {
    document.getElementById("bg").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.body.style.overflow = "auto";

  }


  function openhamburger() {
    document.getElementById("menu").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closehamburger() {
    document.getElementById("menu").style.display = "none";
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
 
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      delivery.style.display = "fixed";
      delivery.style.top = "0px";
      delivery.style.left = "0px";
      delivery.style.height = "72px";
      delivery.style.width = "100%";
      delivery.style.backgroundColor= "white";
      delivery.style.padding= "8px 16px";
      field.style.backgroundColor = "rgb(238, 238, 238)";
      console.log("if if if");

    }  else {
      field.style.position = "sticky";
      delivery.style.padding= "8px 0px";
      delivery.style.height = "56px";
      delivery.style.backgroundColor= "unset";
      delivery.style.position = "sticky";
      delivery.style.cursor = "pointer";
      delivery.style.padding = "8px 0";
      delivery.style.display = "block";
      delivery.style.zIndex = "3";


      field.style.backgroundColor = "#FFFFFF";
      console.log("else");
    }
  }



  
  window.addEventListener("scroll", activeDelivery);