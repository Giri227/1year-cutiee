"use strict";
const Heart = (function () {
   let heart = document.querySelector(".heart"),
      parts = document.querySelectorAll(".half"),
      name = document.querySelector(".name");

   return {
      heart,
      parts,
      name,
      beat,
      color: "red",
   };

   function beat() {
      Heart.heart.classList.add("beated-heart");

      setTimeout(() => {
         Heart.heart.classList.remove("beated-heart");
      }, 400);
      setTimeout(beat, 1200);
   }
})();

// onload = Heart.beat;
