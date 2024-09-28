window.addEventListener('scroll', function() {    
    var image = document.getElementById('dim_bg');
    var video = document.getElementById('myVideo');
    var logo = document.getElementsByClassName('logo')[0];
    var name = document.getElementById('company_name');
    var biggerGoals = document.getElementById('bigger_goals'); // Element for 'bigger goals'
    if(this.window.scrollY>20){
        logo.style.opacity = '0.1';
        name.innerHTML="Bigger Worlds.Bigger Stories";
    }else if(this.window.scrollY>50){
        logo.style.opacity = '0.5';
    }
    else{ logo.style.opacity = '1';
        name.style.opacity= '1';
        name.innerHTML="Unreal Engine 5";
    }

    // Calculate the scroll position
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
        
    // Calculate scroll percentage (0 to 1)
    var scrollPercent = 8*(scrollY / (documentHeight - windowHeight));

    // Handle video play/pause and reset
    var videoRect = video.getBoundingClientRect();
    var videoInView = videoRect.top < window.innerHeight && videoRect.bottom > 0;

    if (videoInView && scrollY > 0) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
    image.style.opacity = Math.max(0, 0.6 - scrollPercent);
});
var search = document.getElementsByClassName("search")[0];
var search_icon = document.getElementById("search_icon");
var more=document.getElementById("more");
let search_bar = true;
search_icon.addEventListener("click", function() {
    if (search_bar) {
        search.style.display='block'; 
        search.style.backgroundColor = "rgba(59, 57, 57, 0.719)";
        search_bar = false;
    } else {
        search.style.display='none'; 
        search.style.backgroundColor = "transparent"; 
        search_bar = true;
    }
});

var detail_image=document.getElementById("detail_image")
var change=true;
detail_image.addEventListener('click',function(){
    if(change){
        detail_image.src="images/change.jpg";
        change=false;
    }
    else{
        detail_image.src="images/3.jpg";
        change=true;
        }
});