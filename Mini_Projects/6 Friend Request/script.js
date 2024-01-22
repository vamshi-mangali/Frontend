

// Friend Request
var Status = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");


add.addEventListener("click", ()=>{
    Status.innerHTML = "Friends";
    Status.style.color = "green";
})

removeFriend.addEventListener("click", ()=>{
    Status.innerHTML = "Stranger";
    Status.style.color = "#e47417";
})


// like Popup
var con = document.querySelector("#like");
var likeBtn = document.querySelector("i");

con.addEventListener("dblclick", ()=>{
    likeBtn.style.opacity = "0.8";
    likeBtn.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(()=>{
        likeBtn.style.opacity = "0";
    }, 1000)

    setTimeout(()=>{
        likeBtn.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)
})



// Insta Stories

var arr = [
    {dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERvZ3xlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERvZ3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww"},
    {dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQ6W21kLh0GmdGwp3s7yhW6IoxTh6ilNg2g&usqp=CAU", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQ6W21kLh0GmdGwp3s7yhW6IoxTh6ilNg2g&usqp=CAU"},
    {dp: "https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww"}
    
]

var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach((elem, idx)=>{
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

stories.innerHTML = clutter;

stories.addEventListener("click", (dets)=>{
    var fullSc = document.querySelector("#full-screen");
    var story = arr[dets.target.id].story;

    fullSc.style.display = "block";
    fullSc.style.backgroundImage = `url(${story})`;
    
    setTimeout(()=>{
        fullSc.style.display = "none";
    }, 3000)
})

