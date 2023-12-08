let image=document.getElementById("bulb")
let switchbutton=document.getElementById("switchbutton")
let onsound=new Audio('sources/onsound.mp3')
let offsound=new Audio('sources/offsound.mp3')
function power(){
    if(image.src.match("bulbON")){
        image.src="sources/bulbOFF.png";
        document.body.style.backgroundImage="none";
        offsound.play()
        switchbutton.style.backgroundImage = "url('sources/switchoff.png')";
    }
    else{
        image.src="sources/bulbON.png";
        document.body.style.backgroundImage = "url('sources/gradient.png')";
        onsound.play()
        switchbutton.style.backgroundImage = "url('sources/switchon.png')";
        }
        
          

        
}
let bulbshatter=new Audio('sources/bulbshatter.mp3')

function broken(){
    if(image.src.match("bulb")){
        image.src="sources/brokenbulb.png";
        bulbshatter.play()
        document.body.style.backgroundImage="none";
        document.getElementById("switchbutton").onclick='';
    }
}