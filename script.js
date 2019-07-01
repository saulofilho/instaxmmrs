const images = [
    "imgs/foto1.jpg",
    "imgs/foto2.jpg",
    "imgs/foto3.jpg",
    "imgs/foto4.jpg",
    "imgs/foto5.jpg",
    "imgs/foto6.jpg",
    "imgs/foto7.jpg",
    "imgs/foto8.jpg",
    "imgs/foto9.jpg",
    "imgs/foto10.jpg",
    "imgs/foto11.jpg",
    "imgs/foto12.jpg",
    "imgs/foto13.jpg",
    "imgs/foto14.jpg",
    "imgs/foto15.jpg",
    "imgs/foto16.jpg",
    "imgs/foto17.jpg",
    "imgs/foto18.jpg",
    "imgs/foto19.jpg",
    "imgs/foto20.jpg",
    "imgs/foto21.jpg",
    "imgs/foto22.jpg",
    "imgs/foto23.jpg",
    "imgs/foto24.jpg",
    "imgs/foto25.jpg",
    "imgs/foto26.jpg",
    "imgs/foto27.jpg",
    "imgs/foto28.jpg",
    "imgs/foto29.jpg",
    "imgs/foto30.jpg",
    "imgs/foto31.jpg",
    "imgs/foto32.jpg",
    "imgs/foto33.jpg",
    "imgs/foto34.jpg",
    "imgs/foto35.jpg",
    "imgs/foto36.jpg",
    "imgs/foto37.jpg",
    "imgs/foto38.jpg",
    "imgs/foto39.jpg",
    "imgs/foto40.jpg",
    "imgs/foto41.jpg",
    "imgs/foto42.jpg",
    "imgs/foto43.jpg",
    "imgs/foto44.jpg",
    "imgs/foto45.jpg",
    "imgs/foto46.jpg",
    "imgs/foto47.jpg",
    "imgs/foto48.jpg",
    "imgs/foto49.jpg",
    "imgs/foto50.jpg",
    "imgs/foto51.jpg",
    "imgs/foto52.jpg",
    "imgs/foto53.jpg",
    "imgs/foto54.jpg",
    "imgs/foto55.jpg",
    "imgs/foto56.jpg",
    "imgs/foto57.jpg",
    "imgs/foto58.jpg",
    "imgs/foto59.jpg",
    "imgs/foto60.jpg",
    "imgs/foto61.jpg",
    "imgs/foto62.jpg",
    "imgs/foto63.jpg",
    "imgs/foto64.jpg",
    "imgs/foto65.jpg",
    "imgs/foto66.jpg",
    "imgs/foto67.jpg",
    "imgs/foto68.jpg",
    "imgs/foto69.jpg",
    "imgs/foto70.jpg",
    "imgs/foto71.jpg",
    "imgs/foto72.jpg",
    "imgs/foto73.jpg",
    "imgs/foto74.jpg",
    "imgs/foto75.jpg",
    "imgs/foto76.jpg",
    "imgs/foto77.jpg",
    "imgs/foto78.jpg",
    "imgs/foto79.jpg",
    "imgs/foto80.jpg",
    "imgs/foto81.jpg",
    "imgs/foto82.jpg",
    "imgs/foto83.jpg",
  ];
  
  let i = 0;
  
  function placeImage(x, y) {
    const nextSrc = images[i];
    
    const img = document.createElement("img");

    img.setAttribute("src", nextSrc);
    
    img.setAttribute("draggable", "false");
    
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(-50%, -50%) scale(0.3) rotate(" + (Math.random() * 360 - 0) + "deg)";
    
    document.body.appendChild(img);
    
    i = i + 1;
    if (i >= images.length) {
      i = 0;
    }
  }
  
  document.addEventListener("click", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  });
  
  document.addEventListener("touchend", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  });