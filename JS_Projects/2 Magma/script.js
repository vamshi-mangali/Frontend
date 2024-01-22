

var clutter = "";

document.querySelector("#page2>p").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>` ;

    document.querySelector("#page2>p").innerHTML = clutter;
   
})


gsap.to("#page2>p>span", {
    
    scrollTrigger: {
        trigger: `#page2>p>span`,
        start: "top bottom",
        end: "bottom top",
        scroller: `body`,
        scrub: .2,
    },
    stagger: .2 ,
    color: `#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    images/frames00007.png
    images/frames00010.png
    images/frames00013.png
    images/frames00016.png
    images/frames00019.png
    images/frames00022.png
    images/frames00025.png
    images/frames00028.png
    images/frames00031.png
    images/frames00034.png
    images/frames00037.png
    images/frames00040.png
    images/frames00043.png
    images/frames00046.png
    images/frames00049.png
    images/frames00052.png
    images/frames00055.png
    images/frames00058.png
    images/frames00061.png
    images/frames00064.png
    images/frames00067.png
    images/frames00070.png
    images/frames00073.png
    images/frames00076.png
    images/frames00079.png
    images/frames00082.png
    images/frames00085.png
    images/frames00088.png
    images/frames00091.png
    images/frames00094.png
    images/frames00097.png
    images/frames00100.png
    images/frames00103.png
    images/frames00106.png
    images/frames00109.png
    images/frames00112.png
    images/frames00115.png
    images/frames00118.png
    images/frames00121.png
    images/frames00124.png
    images/frames00127.png
    images/frames00130.png
    images/frames00133.png
    images/frames00136.png
    images/frames00139.png
    images/frames00142.png
    images/frames00145.png
    images/frames00148.png
    images/frames00151.png
    images/frames00154.png
    images/frames00157.png
    images/frames00160.png
    images/frames00163.png
    images/frames00166.png
    images/frames00169.png
    images/frames00172.png
    images/frames00175.png
    images/frames00178.png
    images/frames00181.png
    images/frames00184.png
    images/frames00187.png
    images/frames00190.png
    images/frames00193.png
    images/frames00196.png
    images/frames00199.png
    images/frames00202.png
    `;
    return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: .5,
        trigger: `#page3`,
        start: `top top`,
        end: `250% top`,
        scroller: `body`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page3",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
});
}
canvas()

var clutter2 = "";
document.querySelector("#page4>p").textContent.split(" ").forEach(function(word){
    clutter2 += `<span> ${word} </span>`;

    document.querySelector("#page4>p").innerHTML = clutter2;
})

gsap.to("#page4>p>span", {
    scrollTrigger: {
        trigger: "#page4>p>span",
        start: `top bottom`,
        end: `bottom top`,
        scroller: `body`,
        scrub: .2
    },
    stagger: .2,
    color: `#fff`
})



function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    images/bridges00004.png
    images/bridges00010.png
    images/bridges00013.png
    images/bridges00016.png
    images/bridges00019.png
    images/bridges00022.png
    images/bridges00025.png
    images/bridges00028.png
    images/bridges00031.png
    images/bridges00034.png
    images/bridges00037.png
    images/bridges00040.png
    images/bridges00043.png
    images/bridges00046.png
    images/bridges00049.png
    images/bridges00052.png
    images/bridges00055.png
    images/bridges00058.png
    images/bridges00061.png
    images/bridges00064.png
    images/bridges00067.png
    images/bridges00070.png
    images/bridges00073.png
    images/bridges00076.png
    images/bridges00079.png
    images/bridges00082.png
    images/bridges00085.png
    images/bridges00088.png
    images/bridges00091.png
    images/bridges00094.png
    images/bridges00097.png
    images/bridges00100.png
    images/bridges00103.png
    images/bridges00106.png
    images/bridges00109.png
    images/bridges00112.png
    images/bridges00115.png
    images/bridges00118.png
    images/bridges00121.png
    images/bridges00124.png
    images/bridges00127.png
    images/bridges00130.png
    images/bridges00133.png
    images/bridges00136.png
    images/bridges00139.png
    images/bridges00142.png
    images/bridges00145.png
    images/bridges00148.png
    images/bridges00151.png
    images/bridges00154.png
    images/bridges00157.png
    images/bridges00160.png
    images/bridges00163.png
    images/bridges00166.png
    images/bridges00169.png
    images/bridges00172.png
    images/bridges00175.png
    images/bridges00178.png
    images/bridges00181.png
    images/bridges00184.png
    images/bridges00187.png
    images/bridges00190.png
    images/bridges00193.png
    images/bridges00196.png
    images/bridges00199.png
    images/bridges00202.png
    `;
    return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: .5,
        trigger: `#page5`,
        start: `top top`,
        end: `250% top`,
        scroller: `body`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page5",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
});
}
canvas1()

var clutter3 = "";
document.querySelector("#page6>p").textContent.split(" ").forEach((word)=> {
    clutter3 += `<span> ${word} </span>`;

    document.querySelector("#page6>p").innerHTML = clutter3;
})

gsap.to("#page6>p>span", {
    scrollTrigger: {
        trigger: `#page6>p>span`,
        scroller: `body`,
        start: `top bottom`,
        end: `bottom top`,
        scrub : .2
    },
    stagger: .2,
    color: `#fff`
})

gsap.to(".circle", {
    scrollTrigger:{
        trigger: `.circle`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `body`,
        // markers: true,
        // pin: true,
        scrub: 5
    },
    scale: 1.2,
    // opacity: 1
})

gsap.to(".inner-cir", {
    scrollTrigger:{
        trigger: `.inner-cir`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `body`,
        // pin: true,
        scrub: 5
    },
    backgroundColor: `#0a3bce91`
})

gsap.from(".info", {
    y : 100,
    scrollTrigger: {
        trigger: `.info`,
        scroller: 'body',
        // markers: true,
        start: `top 78%`,
        end : `top 68%`,
        scrub: 1
    },
    opacity: 0, 
    rotate: -20
})




