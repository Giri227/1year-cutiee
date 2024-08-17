const createStar = function () {
   let star = document.querySelector(".star").cloneNode(),
      moveStar = setInterval(animateStar, 100);

   star.style.cssText = `
      position: absolute;
      top: ${Math.random() * 952}px;
      left: ${Math.random() * 1910}px;
      z-index: 999;
      animation: create-star 2s linear;
   `;

   function animateStar() {
      star.style.top = +star.style.top.replace("px", "") + 1 + "px";

      if (+star.style.top.replace("px", "") > document.body.clientHeight) {
         removeStar();
         clearInterval(moveStar);
         createStar();
      }
   }

   function removeStar() {
      document.body.removeChild(star);
   }

   document.body.insertBefore(star, document.querySelector(".star"));
};

for (let i = 0; i < 100; i++) createStar();
