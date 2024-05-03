
document.querySelectorAll(".card").forEach((e) => {

    const rectBox = e.querySelector(".rectBox"),
          title = e.querySelector(".rectBox h1"),
          paragraph = e.querySelector(".rectBox p");

// these are the events that will take place when mouse enter in the cards
    e.addEventListener("mouseenter", () => {

    //this is for main title of the card
      gsap.to(e.querySelector("#title"), {
        y: -15,
        opacity: 0,
        ease: Power4,
      });
      
    //this for the box that will grow when mouse enters
      gsap.to(rectBox, {
        width: "100%",
        opacity: 0.8,
        height: "82%",
        duration: 0.5,
        ease: "power4",
      });

    //this for the elements inside the box
      gsap.to(title, {
        opacity: 1,
        y: -12,
        ease: "power4",
        delay: 0.5,
      });

      gsap.to(paragraph, {
        opacity: 1,
        y: -12,
        ease: "power4",
        delay: 0.7,
      });
    });
 
//and these are the events that will take place when mouse leaves the cards
    e.addEventListener("mouseleave", () => {
      gsap.to(e.querySelector("#title"), {
        y: 0,
        opacity: 1,
        ease: Power4,
      });

      gsap.to(rectBox, {
        width: 0,
        height: 0,
        duration: 0.5,
        ease: "power4",
        opacity: 0,
      });

      gsap.to(title, {
        opacity: 0,
        y: 0,
        ease: "power4",
      });

      gsap.to(paragraph, {
        opacity: 0,
        y: 0,
        ease: "power4",
      });
    });
  });