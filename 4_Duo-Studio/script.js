

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+10 +"px";
    crsr.style.top = dets.y +10 +"px";
})



var tl = gsap.timeline( {
    scrollTrigger: {
        trigger: `#page1 h1`,
        scroller: `body`,
        start: `top 30%`,
        end: `top 25%`,
        scrub : 3,
        // markers: true
    }
})
tl.to("#page1 h1", {
    x: -50,
}, "anim")
tl.to("#page1 h2", {
    x: 50,
}, "anim")
tl.to("#page1 video", {
    width : `80%`,
}, "anim")


gsap.to("#page2", {
    backgroundColor : `#fff`,
    scrollTrigger: {
        trigger: `#page2`,
        scoller: `body`,
        start: `top 50%`,
    }
})

var boxes = document.querySelectorAll("#page5 .box");
boxes.forEach((elem)=> {
    elem.addEventListener("mouseenter", ()=>{
        var image = elem.getAttribute("data-image");
        crsr.style.width = `300px`;
        crsr.style.height = `170px`;
        crsr.style.borderRadius = `10px`
        crsr.style.backgroundImage = `url(${image})`;
    })
    elem.addEventListener("mouseleave", ()=>{
        crsr.style.width = `13px`;
        crsr.style.height = `13px`;
        crsr.style.borderRadius = `50%`
        crsr.style.backgroundImage = `none`;
    })
})