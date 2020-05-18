// add event listener for handling click
var n=document.querySelectorAll(".drum").length;

for ( var i=0; i<n; i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick()
{
    var buttonType = this.textContent;
    buttonType=buttonType.trim();
    PlayAudio(buttonType);
    GlowTimeout(buttonType);
}

// add event listener for handling keypress (called as keydown)

document.addEventListener("keydown", handleKeydown);

function handleKeydown()
{
    var kbKey = event.key;
    PlayAudio(kbKey);
    GlowTimeout(kbKey);
}

//function to play audio for keypress or mouseclick

function PlayAudio(character)
{
    switch (character) 
    {
        case "w": 
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a": 
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s": 
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d": 
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j": 
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "k": 
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "l": 
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
    }
}

//function for the glow animation

function GlowTimeout(character)
{
    document.querySelector("."+character).classList.add("glow");
    setTimeout(function () {document.querySelector("."+character).classList.remove("glow"); },250);
}
