let active = 3;
let miniCircles = document.querySelectorAll(".miniCircle");
let h4 = document.querySelectorAll("h4");
let h6 = document.querySelectorAll("h6");
let img = document.querySelector("img");
let src = img.getAttribute("src");
let seconds = document.querySelectorAll(".second");
gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})

let something = ["anime.jpg" , "forest.jpg" , "nature.jpg" , "space.jpg" , "ocean.jpg"];

gsap.to(miniCircles[active - 1], {
    opacity: .5
})

gsap.to(seconds[active - 1], {
    opacity: 1
})

miniCircles.forEach((val, index) => {
    val.addEventListener("click", () => {
        gsap.to("#circle ", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1

        })
        grayout();
        gsap.to(miniCircles[index], {
            opacity: .5,
            duration: 1
        })
        gsap.to(seconds[index], {
            opacity: .8,
            duration: 1

        })  
        gsap.set(img , {
            attr : {
                src : something[index]
            }
        })    
    })
})
let grayout = () => {
    gsap.to(miniCircles, {
        opacity: .1

    })
    gsap.to(seconds, {
        opacity: .5
    })

}

h4.forEach((val, index) => {
    val.addEventListener("click", () => {
        gsap.to("#circle ", {
            rotate: (3 - (index + 1)) * 10,
            // ease: Expo.easeInOut,
            duration: 1

        })
        grayout()
        gsap.to(miniCircles[index], {
            opacity: .5,
            duration: 1
        })
        gsap.to(seconds[index], {
            opacity: .8,
            duration: 1
        })
        gsap.set(img , {
            attr : {
                src : something[index],
            }
        })
    })
})
h6.forEach((val, index) => {
    val.addEventListener("click", () => {
        gsap.to("#circle ", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1

        })
        grayout()
        gsap.to(miniCircles[index], {
            opacity: .5,
            duration: 1
        })
        gsap.to(seconds[index], {
            opacity: .8,
            duration: 1
        })
        gsap.set(img , {
            attr : {
                src : something[index],
            }
        })
        
    })
})
gsap.set(img, {
    attr: {
        src: "nature.jpg"
    }


})