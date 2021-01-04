  const seconds= document. getElementById('inputInSeconds');
  let countS=0;
  let countl=0;
 
 
seconds.addEventListener('focusout',start);
function start(){
   
    const secLimit =parseInt( seconds.value,10);
    document. getElementById('countdown').innerHTML=secLimit;
    document.getElementById('startButton').addEventListener('click',onStartClick);

    function onStartClick(){

        let seconds1 = document.getElementById("countdown").textContent;
        const countdown = setInterval(function() {
        seconds1--;
   
        document.getElementById("countdown").textContent= seconds1;
        if (seconds1 <= 0) clearInterval(countdown);
        }, 1000);

        countS=0;
        countl=0;
    document.addEventListener('keydown', printKeyCount);
   
    setTimeout(() => {
        document.removeEventListener('keydown' ,printKeyCount);
        const confetti = new ConfettiGenerator({ target: 'my-canvas', width: 300, height: 110 });
        confetti.render()
              const score='L= '+countl+'  ,  S= '+countS;

             if (countS< countl){
             document.getElementById('winner').innerHTML='L is winner <br> Score<br>'+score ;
                
                }
              
             else if(countS> countl){
                
             document.getElementById('winner').innerHTML='S is winner <br> Score<br>'+score ;
               // const confettiSettings = ;
                
                confetti.render();
                }
         
             else if(countl==countS && countS>0 || countl>0)
             document.getElementById('winner').innerHTML='It\'s a tie <br> Score<br>'+score;   
             else if(countl==0 && countS==0)
             document.getElementById('winner').innerHTML='No key is pressed <br><br><br>'  
             document.getElementById('gameOver').innerHTML='Game Over' ;


                const x = document.getElementById("pressers");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
             
                

    },secLimit *1000);   
  }
}

 

function printKeyCount(event){
   
    
    if(event.keyCode == 76) {
        countl++;
        //console.log('L was pressed');
        document.getElementById('Lcount').innerHTML=countl;
    }
    else if(event.keyCode == 83) {
        countS++;
        //console.log('S was pressed');
        document.getElementById('Scount').innerHTML=countS;
    }
    

}

document.getElementById('restart').addEventListener('click', reStart);
function reStart(){
    window.location.reload();
    /* document.getElementById('Scount').innerHTML='';
    document.getElementById('Lcount').innerHTML= '';
    document.getElementById('winner').innerHTML='';
    document.getElementById('inputInSeconds').removeEventListener('input',start);
    //document.getElementById('startButton').removeEventListener('click', onStartClick);
    document.getElementById('restart').removeEventListener('click', reStart);
    document.getElementById('form1').reset(); */

}


