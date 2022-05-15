window.addEventListener("mousemove", function (dets) {
    document.querySelector("#pointer").style.top = `${dets.clientY}px`;
    document.querySelector("#pointer").style.left = `${dets.clientX}px`;
});


gsap.to(".ttxt h1", {
    y: "-5%",
    stagger: .5,
    ease: Expo.easeInOut,
    duration: 1.5,
});


function boxAnimation() {

    if (screen.width < 550) {
        gsap.from("#box2", {
            scrollTrigger: {
                trigger: "#section",
                start: "15% 50%",
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box3", {
            scrollTrigger: {
                trigger: "#section",
                start: "35% 50%",
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box4", {
            scrollTrigger: {
                trigger: "#section",
                start: "55% 50%",
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box5", {
            scrollTrigger: {
                trigger: "#section",
                start: "74% 50%",
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });
    }

    else {
        gsap.from("#box2", {
            scrollTrigger: {
                trigger: "#section",
                start: "18% 50%",
                end: "18% 50%",
                scrub: 4
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box3", {
            scrollTrigger: {
                trigger: "#section",
                start: "38% 50%",
                end: "38% 50%",
                scrub: 4
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box4", {
            scrollTrigger: {
                trigger: "#section",
                start: "58% 50%",
                end: "58% 50%",
                scrub: 4
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });

        gsap.from("#box5", {
            scrollTrigger: {
                trigger: "#section",
                start: "78% 50%",
                end: "78% 50%",
                scrub: 4
            },
            opacity: 0,
            y: "15%",
            duration: 1,
            ease: Power4.easeInOut
        });
    }
    
}


//$(".ttxt h1").textillate({ in : {effect:'fadeInUp'} });
//$(".ttxt h1").textillate({ out : {effect:'fadeInUp'} });



function pointerBorderColorChange() {
    document.querySelectorAll(".blackText")
        .forEach(function (elem) {
            elem.addEventListener("mouseover", function () {
                document.querySelector("#pointer").style.borderColor = "white";
                document.querySelector("#pointer").style.mixBlendMode = "difference";
            })
            elem.addEventListener("mouseleave", function () {
                document.querySelector("#pointer").style.borderColor = "black";
                document.querySelector("#pointer").style.mixBlendMode = "initial";
            })
        });
}


function mainDisplayColorChange() {

    document.querySelector("#box1").addEventListener("mouseover", function () {
        document.querySelector("#main").style.backgroundColor = "rgb(0,164,164)";
    })
    document.querySelector("#box1").addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
    })

    document.querySelector("#box2").addEventListener("mousemove", function () {
        document.querySelector("#main").style.backgroundColor = "pink";
    })
    document.querySelector("#box2").addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
    })

    document.querySelector("#box3").addEventListener("mousemove", function () {
        document.querySelector("#main").style.backgroundColor = "rgb(17, 17, 17)";
        document.querySelector("#box3 .text").style.color = "white"
    })
    document.querySelector("#box3").addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
        document.querySelector("#box3 .text").style.color = "initial"
    })

    document.querySelector("#box4").addEventListener("mousemove", function () {
        document.querySelector("#main").style.backgroundColor = "rgb(252, 107, 81)";
    })
    document.querySelector("#box4").addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
    })

    document.querySelector("#box5").addEventListener("mousemove", function () {
        document.querySelector("#main").style.backgroundColor = "rgb(94, 127, 224)";
    })
    document.querySelector("#box5").addEventListener("mouseleave", function () {
        document.querySelector("#main").style.backgroundColor = "#F8F8F8";
    })


}


function svgDisplay() {
    if (screen.width < 550) {

    }
    else {
        document.querySelectorAll(".box")
            .forEach(function (elem) {
                elem.addEventListener("mousemove", function (dets) {
                    document.querySelector("#pointer").style.display = "none";
                    document.querySelector("#svgdiv").style.visibility = "visible";
                    document.querySelector("#svgdiv").style.top = `${dets.clientY - 85}px`;
                    document.querySelector("#svgdiv").style.left = `${dets.clientX - 85}px`;
                    document.querySelector("#svgdiv").style.fill = "white";
                    document.querySelector("#svgdiv").style.mixBlendMode = "difference";
                })
                elem.addEventListener("mouseleave", function () {
                    document.querySelector("#pointer").style.display = "initial";
                    document.querySelector("#svgdiv").style.visibility = "hidden";
                    document.querySelector("#svgdiv").style.fill = "transparent";
                    document.querySelector("#svgdiv").style.mixBlendMode = "normal";
                })
            });
    }
}


function pointerEnlarge() {
    document.querySelectorAll(".enlarge")
        .forEach(function (elem) {
            elem.addEventListener("mousemove", function () {
                window.addEventListener("mousemove", function (dets) {
                    document.querySelector("#pointer").style.top = `${dets.clientY - 5}px`;
                    document.querySelector("#pointer").style.left = `${dets.clientX + 30}px`;
                })
                document.querySelector("#pointer").style.width = "80px";
                document.querySelector("#pointer").style.height = "80px";
                document.querySelector("#pointer").style.backgroundColor = "white";
                document.querySelector("#pointer").style.mixBlendMode = "difference";
            })
            elem.addEventListener("mouseleave", function () {
                window.addEventListener("mousemove", function (dets) {
                    document.querySelector("#pointer").style.top = `${dets.clientY}px`;
                    document.querySelector("#pointer").style.left = `${dets.clientX}px`;
                })
                document.querySelector("#pointer").style.width = "20px";
                document.querySelector("#pointer").style.height = "20px";
                document.querySelector("#pointer").style.backgroundColor = "transparent";
                document.querySelector("#pointer").style.mixBlendMode = "initial";
            })
        });
}


function footerHeadingChange() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            start: "-10% 50%"
        }
    });

    for (var i = 1; i <= 10; i++) {
        tl.to(".abcd h1", {
            y: "0%",
            stagger: .3,
            duration: 1,
            visibility: "visible",
            ease: Expo.easeInOut
        });

        tl.to(".abcd h1", {
            y: "-100%",
            stagger: .3,
            duration: 1,
            visibility: "visible",
            ease: Expo.easeInOut
        });


        tl.to(".abcd h1", {
            y: "-200%",
            stagger: .3,
            duration: 1,
            visibility: "visible",
            ease: Expo.easeInOut
        });

        tl.to(".abcd h1", {
            y: "-300%",
            stagger: .3,
            duration: 1,
            visibility: "visible",
            ease: Expo.easeInOut
        });

        tl.to(".abcd h1", {
            y: "100%",
            duration: .1,
            visibility: "hidden"
        });
    }
}


mainDisplayColorChange();
pointerEnlarge();
svgDisplay();
footerHeadingChange();
pointerBorderColorChange();
boxAnimation();