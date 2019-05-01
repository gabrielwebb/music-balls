window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual  = document.querySelector('.visual');
    const colors = [
       '#2b7ecc',
       '#9660d3' ,
       '#d360cd',
       '#a55c99',
       '#e612b1',
       '#e666c6'
    ];
    



    // sound area


    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    })

// bubble area

const createBubbles = (index) => {
    const bubble = document.createElement("div")
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index]
    bubble.style.animation = ' jump 1s ease';
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this)
    })
}

})