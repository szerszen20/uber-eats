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