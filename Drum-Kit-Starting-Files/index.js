
var nbrOfDrumBtn = document.querySelectorAll(".drum").length;


// function for mouse
for(var i=0 ; i<nbrOfDrumBtn ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        MakeSound(this.innerHTML);
        btn_Anim(this.innerHTML);
    });
}


// function for btns
document.addEventListener("keypress", function(event){
    MakeSound(event.key);
    btn_Anim(event.key);
});




// function for Sound
function MakeSound(e){
        
    switch (e) {
        case "w":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        
        case "a":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
            
        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
            
        case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
    
        default:
            alert("Please use the letters shown below.")
            break;
    }
}


// function of btn animation
function btn_Anim(pressed_btn){
    var active_btn = document.querySelector("."+pressed_btn);
    active_btn.classList.add("pressed");
    setTimeout(function() {active_btn.classList.remove("pressed")}, 100 );

}