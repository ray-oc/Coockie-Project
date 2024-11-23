const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1.2,0.3)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { scale: 0, x: -50, rotation: "-45deg" },
  { scale: 1, x: 0, rotation: "0deg" },
  "<30%"
);
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

// Cookie jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);
tl.fromTo("#crumbs", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");

// Const fading the cookie out
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
