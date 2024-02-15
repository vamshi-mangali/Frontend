
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+ 30 +"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x-150+"px";
    blur.style.top = dets.y-150+"px";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2.5;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px";
        crsr.style.backgroundColor = "#96ba32";
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 1,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end : "top -11%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -75%",
        // markers: true,
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in ", {
    y : 50,
    opacity:0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
}) 

gsap.from(".card", {
    scale:0.8,
    opacity:0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
}) 

gsap.from("#colon-1", {
    y: -30,
    x: -30,
    duration: 2,
    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
}) 

gsap.from("#colon-2", {
    y: 30,
    x: 30,
    duration: 2,
    scrollTrigger: {
        trigger: "#colon-2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 87%",
        scrub: 4
    }
}) 

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 87%",
        scrub: 4
    }
})

var footerh2 = document.querySelectorAll("#footer h2");
footerh2.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2.5;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px";
        crsr.style.backgroundColor = "#96ba32";
    })
})
