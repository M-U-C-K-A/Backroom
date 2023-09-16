var noclip = document.querySelector(".noclip");
var company = document.querySelector(".company");
var backroom = document.querySelector(".backroom");
var blackScreen = document.querySelector(".black-screen");

noclip.addEventListener("click", function() {
    const tl = gsap.timeline();
    tl.to(company, { marginTop: "100%", duration: 5.5 }) // Descendre company avec une durée de 2 secondes
        .to(blackScreen, { marginTop: "0", onComplete: function() {
            // Animation terminée, maintenant faire descendre backroom
            gsap.to(backroom, { marginTop: "0", duration: 6 });
        }}, "-=6"); // Faire descendre l'écran noir pour remplacer company
});
