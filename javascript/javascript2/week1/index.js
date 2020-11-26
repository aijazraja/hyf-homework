             /********************************************************/
               console.log('\n        Smallest letter in Array\n\n')
             /********************************************************/      

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const smalleLetter=getSmallestLetter(danishWords); // returns 'ø'
function getSmallestLetter(words){
    let temp=danishWords[0];
    for(let i=0;i<danishWords.length;i++){
         if(danishWords[i].length<=temp.length){
             temp=danishWords[i];
             danishWords[i]=danishWords[0];
             danishWords[0]=temp;

         }

    }
    return danishWords[0];
    //console.log(danishWords[0])

}
document.getElementById('smallestLetter').innerHTML='Smallest letter in array : '+smalleLetter;
console.log('Smallest letter in array ["bil", "plante", "kaffe", "bog", "ø", "planetarium"] is : '+smalleLetter);


                /********************************************************/
                      console.log('\n        Danish letters count\n\n')
                /********************************************************/ 

const danishString2 = "Blå grød med røde bær";
let danishLetters=danishLettersCounter(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
function danishLettersCounter(danString){
    const stringArray=danString.split(" ");
   // console.log(stringArray);
    let total=0;
    let åCount=0;
    let æCount=0;
    let øCount=0;
    for(let i=0;i<stringArray.length;i++){
        if(stringArray[i].includes('å')){
            åCount++;
            total++;   
        }
        if(stringArray[i].includes('ø')){
            øCount++;
            total++;   
        }
        if(stringArray[i].includes('æ')){
            æCount++;
            total++;   
        }

    }
    
    /* console.log(total);
    console.log(øCount);
    console.log(åCount); */
    return  'Toral Danish letter: '+total+ '<br> No of æ: '+æCount+'<br> No of å: '+åCount+'<br> No of ø: '+øCount;

}
document.getElementById('danishLetters').innerHTML=danishLetters;
console.log(danishLetters);


            /********************************************************/
              console.log('\n       Spirit animal name generator\n\n')
            /********************************************************/ 
  

 let firstName=document.getElementById('getname');
 firstName.addEventListener('click',getSpiritName);
 function getSpiritName(){
     let spiritAnimals=['-The Aardwolf','-The Alley Cat','-The Bear','-The Black Jaguar',
     '-The Dolphin','-The Falcon','-The Gorilla','-The Hawk','-The Honey Bee','-The Jaguar'];
     let randomAnimal=spiritAnimals[Math.floor(Math.random()*10 )];
    let name1=document.getElementById('name').value;
     if(name1==''){
         let a='Please enter name'
        document.getElementById("h1").innerHTML=a;
     }else {
        //console.log(name1);
        let name=document.getElementById('name').value+ ' ' + randomAnimal;
        document.getElementById("h1").innerHTML=name;   
     }
    } 

    /* Event types - Optional and a little tricky
    Give the user the possibility to select when the spirit animal should be created. 
    Should it be when the user clicks the button or when the user hovers the input field 
    or when text is written in the input field?
    
    How can we give a user multiple options to select from in html? Maybe time for google!
    
    An example is: A user select that she only wants to generate a spirit animal when the input is hovered.
     That means that if the user writes her name in the input and clicks the 
    button nothing happens. BUT when she hovers the input, NOW a new spirit animal is generated. */

     
    //const selectElement = document.querySelector('.select');
/* 
  document.getElementById("select").addEventListener('change', function(){
    const result = document.querySelector('.result');
    result.textContent = result;

   } ) ;
   function event(){
  
}
 */


    function onChange(){
       
        document.getElementById('input').removeEventListener('keyup',printName);
        document.getElementById('button1').removeEventListener('click',printName);
        document.getElementById('input').removeEventListener('mouseover',printName);

            if(document.getElementById('text').selected){
                   document.getElementById('input').addEventListener('keyup',printName)
                }
            else if(document.getElementById('clickButton').selected){
                  document.getElementById('button1').addEventListener('click',printName)
                }
            else if(document.getElementById('hover').selected){
                //console.log('aa');
                document.getElementById('input').addEventListener('mouseover',printName)

            }
    }

    function printName(){
        let spiritAnimals=['-The Aardwolf','-The Alley Cat','-The Bear','-The Black Jaguar',
        '-The Dolphin','-The Falcon','-The Gorilla','-The Hawk','-The Honey Bee','-The Jaguar'];
        let randomAnimal=spiritAnimals[Math.floor(Math.random()*10 )];

            let name=document.getElementById('input').value ;
            if(name)
                document.getElementById('h2').innerHTML=name+ randomAnimal;
                else
                document.getElementById('h2').innerHTML='Please enter name';
    }
   

