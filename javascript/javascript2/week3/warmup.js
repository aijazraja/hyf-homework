
/* 1-Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded. */

setTimeout(() => {
    console.log('(Exercise 1) This text is loaded after 25 seconds')
    
}, 2500);

/* 2-Create a function that takes 2 parameters: delay and stringToLog.
 Calling this function should log out the stringToLog after delay seconds.
 Call the function you have created with some different arguments. */

function printlater(delay,stringToPrint){
    setTimeout(() => {
        console.log(stringToPrint);
        
    }, delay);

}
printlater(1500,'(Exercise 2) Sorry for wait.I am late 15 seconds');
printlater(3500,'(Exercise 2) Sorry gain.This time I am late 35 seconds');


/* 3-Create a button in html. When clicking this button, use the function you 
created in the previous task to log out the text: "Called after 5 seconds" 5 seconds 
after the button is clicked.  */

document.getElementById('button1').addEventListener('click',()=>{
    setTimeout(() => {
        console.log('(Exercise 3) Called after 5 seconds');
        
    }, 5000);
});

/* 4-Create two functions and assign them to two different variables. 
 One function logs out Earth, the other function logs out Saturn.
 Now create a new third function that has one parameter: planetLogFunction. 
 The only thing the third function should do is call the provided parameter function. 
 Try call the third function once with the Earth function and once
  with the Saturn function.
  */

const earthLogger=()=>{
    console.log('(Exercise 4) Earth');
}

const saturnLogger=()=>{
    console.log('(Exercise 4) Saturn');
}
function planetLofFunction(callback){
    callback();
}
planetLofFunction(earthLogger);
planetLofFunction(saturnLogger);

/* 5- Create a button with the text called "Log location". When this button is clicked
 the location (latitude, longitude) of the user should be logged out using this
  browser api */

document.getElementById('button2').addEventListener('click',findMe);

function findMe(){
    navigator.geolocation.watchPosition(printPosition)
}
function printPosition(position){
    console.log('(Exercise 5)\n');
    console.log('latitude :'+position.coords.latitude);
    console.log('longitude :'+position.coords.longitude);
}
/* 6 - Optional Now show that location on a map using fx the Google maps api */


/* document.getElementById('buttton3').addEventListener('click',findMeOnGoogle);
function findMeOnGoogle (){
    navigator.geolocation.watchPosition(printGoogleImage);
}
function printGoogleImage(position){
   //  const lat=pos.coords.latitide;
   //const long=pos.coords.longitude; 
   var latLong = position.coords.latitude + "," + position.coords.longitude;

    let imgUrl="https://maps.googleapis.com/maps/api/staticmap?center="
    +latLong+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
    console.log(imgUrl);

  // let imgUrl="https://www.openstreetmap.org/#map=19/${lat}/${long}"; 

    document.getElementById("gLocation").innerHTML = "<img src='"+imgUrl+"'>";
}

 */

 /* 7-Create a function called runAfterDelay. It has two parameters: delay and 
 callback. When called the function should wait delay seconds and then call the
  provided callback function. Try and call this function with different delays and
   different callback functions */

    function runAfterDelay(delay,callback){
       console.log('(Exercise 7).Wait for '+delay+' secs....'); 
       callback(delay);
   }

    runAfterDelay(4,callLater4);



    function callLater4(seconds){
     
    setTimeout(() => {
        console.log('(Exercise 7).Should be looged after '+ seconds  +' seconds');  
        runAfterDelay(7,callLater7);
    }, seconds*1000);
    
   }

    function callLater7(seconds){
     
        setTimeout(() => {
            console.log('(Exercise 7).Should be looged after '+ seconds  +' seconds');  
               
        }, seconds*1000);

   }

   /* 8-Check if we have double clicked on the page. A double click is defined by
    two clicks within 0.5 seconds. If a double click has been detected, log out 
    the text: "double click!" */
  document.getElementsByTagName('BODY')[0].ondblclick=()=>{
      document.getElementById('doubleClick').innerHTML='You double clicked mouse within 0.5 seconds'
      document.getElementById('doubleClick').style.color='red';
  }    


/* 9-Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
 logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it
  should call the logFunnyJoke function that should log out a funny joke. And vice versa. */

  
  function jokeCreator(callBack0,callBack1,callBack2){
      if(callBack0)
      callBack1();
      if(!callBack0)
       callBack2();

  }
 const shouldTellFunnyJoke=true;
  
  
const logFunnyJoke=()=>{
    console.log('(Exercise 9).Funny joke')
}
const logBadJoke=()=>{
  console.log('(Exercise 9).Bad joke')
}
jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke);

