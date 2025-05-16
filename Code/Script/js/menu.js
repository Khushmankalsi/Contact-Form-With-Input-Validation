function openMenu(){
    document.getElementById('menuShadow').style.left="0";
    document.getElementById('bottomBar').style.left="0";
    document.querySelector('body').style.overflow="hidden";
}
function closeMenu(){
    document.getElementById('menuShadow').style.left="-100%";
    document.getElementById('bottomBar').style.left="-100%";
    document.querySelector('body').style.overflow="visible";
}

(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        // let myWidth = window.innerWidth;
        var topcontainer = document.getElementsByClassName("topcontainer");
        for(var i=0;i<topcontainer.length;i++){
            // console.log(topcontainer[i]);
            if (window.matchMedia('(max-width: 1200px)').matches){
                topcontainer[i].classList.remove("container")
                topcontainer[i].classList.add("container-fluid")
            }else{
                topcontainer[i].classList.remove("container-fluid")
                topcontainer[i].classList.add("container")
            }
        }
    };
})();


