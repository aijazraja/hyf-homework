                            /************************************************
                             *           1 - Item array removal                    *
                             *************************************************/  
  console.log('\n 1 - Item array removal ');
  // Remove the item in names that is equal to nameToRemove

  const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  for(let i=0;i<names.length;i++){
     if(names[i]===nameToRemove){
         names.splice(i,1);
     }

  }
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



                        /************************************************
                         *        2 - When will we be there??            *
                         *************************************************/  


  console.log('\n\n\n 2 - When will we be there?? ');
 /* Write a function where you speficy your speed in km/h and how far you have to go in km. 
  The function has to return the time it will take to arrive at your destination. 
  The time should be formatted like this: 3 hours and 34 minutes.*/


   const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
 
 function calculateTime(travelInformation){
     const timeInHours1=travelInformation.destinationDistance / travelInformation.speed;
    // console.log(timeInHours1);
     const timeInHours=Math.floor(timeInHours1);
     //console.log(timeInHours);
     const timeInMinutes=Math.floor((timeInHours1-timeInHours)*60);
     //console.log(timeInMinutes);
     return 'Total travel time is : '+ timeInHours+ ' hours and '+timeInMinutes+' minutes';
     
     
 }
  
 const travelTime=calculateTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes



                        /************************************************
                         *       3 - Series duration of my life          *
                         *************************************************/  
  console.log('\n\n\n 3 - Series duration of my life');

  /*
How much time of my life have i been watching series on tv?
Lets find out! Calculate how much time a tv series have taken as a percentage 
of an average lifespan of 80 years.
Firstly change the seriesDurations array found above to include your favorite series.
Find the duration of a series here: http://tiii.me/
Create a function that logs out the following text using the seriesDurations array:

Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life
In total that is 0.2% of my life
   */

  
  let totalTimeSpend=0;
 function calculateTime1(){
  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];


   for (let i =0;i<seriesDurations.length;i++){
         let daysInHours=seriesDurations[i].days*24;
         let totalHours=daysInHours+seriesDurations[i].hours;
         let totalDays=totalHours/24;
         let inOneYear=totalDays/364;
          let percentageOfTime=parseFloat(((inOneYear*100)/80).toFixed(3));
             totalTimeSpend=totalTimeSpend+percentageOfTime;

         //console.log(totalHours);
         //console.log(totalTimeSpend);
         console.log(seriesDurations[i].title +' took '+  percentageOfTime +'% of my life');
         
         }
         console.log('\n In total that is '+totalTimeSpend.toFixed(3)+'% of my life');
         }
  
     calculateTime1();

                         /************************************************
                         *       4 -Smart-ease                            *
                         *************************************************/  
  console.log('\n\n 4 - Smart-ease ');
                             /************************
                             * 4(a) -Save a note      *
                             *************************/
                            console.log('\n\n 4(a) -Save a note');

const notes = [];

function saveNote(content, id) {
  const notesObj={
    content:content,
    id:id
  }
  notes.push(notesObj);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 
 
                        /************************
                            * 4(b) -Get a note *
                        *************************/
                       console.log('\n4(b) -Get a note');

                       
function getNote(id) {
  if(id && Number.isInteger(id)){
  for(let i=0;i<notes.length;i++){
       if(notes[i].id===id){
         return notes[i];
       }
      }
 }else return 'id is not specified or id is not a number';
}                    
const firstNote = getNote(1);
//const firstNote = getNote();      // Id is not specified
//const firstNote = getNote('a')     // for argument as stirng

console.log(firstNote); // {content: 'Pick up groceries', id: 1} 

                        /************************
                            * 4(c) -Log out notes *
                        *************************/

console.log('\n 4(c) -Log out notes');

function logOutNotesFormatted() {
  for(let i=0;i<notes.length;i++){
    console.log('The note with id: '+notes[i].id+ ' has the following note text : '+notes[i].content);
    }
  
}
                      
logOutNotesFormatted(); // should log out the text below



                                      
            /************************************************
*                     5 -Smart phone usage app                          *
             ************************************************/ 
            console.log('\n 5 -Smart phone usage app   ');


                        /************************
                      * 5(a) -Adding an activity *
                        *************************/

              console.log('\n 5(a) -Adding an activity');           
/*
Create a variable called activities that stores all activities of the day. 
What type of variable would you think would make sense? Create a function called addActivity. 
It should have three parameters: date, activity and duration. The date should be a string, 
the activity a string and the duration a number. To save the activity push an object that 
contains the date, the activity and the duration to the activities variable.
*/
const activities=[];
function addActivity(dat, act,dur){
  const activitiesObj={
    date:dat,
    activity:act,
    duration:dur
  }
  activities.push(activitiesObj);

}
addActivity('09/12-2020','youtube',30);
addActivity('10/12-2020','facebook',20);
addActivity('11/12-2020','twitter',15);
console.log(activities);


                      /************************
                      * 5(b) -Show my status   * 
                      * 5(c) -Usage limit  * 
                      *************************/
            console.log('\n 5(b) -Show my status\n 5(c) -Usage limit '); 


let totalMinutes2=0;  
let count1=0;  
const usageLimit=100;                
function showStatus(act){
for(let i=0;i<activities.length;i++){
  totalMinutes2=totalMinutes2+act[i].duration;
  count1++;
}
if(totalMinutes2<usageLimit){           
  console.log('You have added '+count1+ ' activites.The amount to '+totalMinutes2+' min.of usage');
  
}else if(totalMinutes2>=usageLimit){            //usage limit
  console.log('You have reached your limit, no more smartphoning for you!');
}

}                     


//showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"                     

addActivity('09/12-2020','youtube',30);
//addActivity('09/12-2020','youtube',5);      // this will log out ..no more smartphoning
//console.log(activities);
showStatus(activities); 

                        /************************
                        * 5(d) -Extra feature *
                      *************************/
  /* Lets improve the addActivity, so that we dont need to specify the date, but the 
 function automatically figures out what the date is. 
 Check out this link: https://stackoverflow.com/a/34015511

 Improve the showStatus function by only showing the number of actitivies for that specific day.

Create a function for calculating the activity a user has spent the most time on.*/
                       

                       console.log('\n 5(d) -Extra feature'); 
                       console.log('\n 5(d.1) -Improved actvities function'); 
const activitiesImproved=[];
function addActivityImporoved(actv, durn){
  const activitiesImprovedObj={
    date:new Date(),
    activity:actv,
    duration:durn
  }
activitiesImproved.push(activitiesImprovedObj);
 

}

const todayDate=new Date();
//console.log(todayDate);
addActivityImporoved('youtube',35);
addActivityImporoved('facebook',12);
addActivityImporoved('twitter',10);
addActivityImporoved('facebook',35);
addActivityImporoved('facebook',12);
addActivityImporoved('youtube',10);
console.log(activitiesImproved);


                              console.log('\n 5(d.2) -Show Status Improve'); 


function showStatusImproved(){
  let count=0;
  for (let i=0;i<activitiesImproved.length;i++){
    if(activitiesImproved[i].date.getDate()===new Date().getDate());
    {
      count++;
    }
  }
  console.log('Number of actitivies today: '+count);

}
showStatusImproved();
                       
                              console.log('\n 5(d.3) -Activity, user used most'); 

function activityUsedMost(){
  let count=0;
  let youtubeCount=0;
  let facebookCount=0;
  let twitterCount=0;
  for(let i=0;i<activitiesImproved.length;i++){
        if(activitiesImproved[i].activity=='youtube'){
          youtubeCount++;
        }else if(activitiesImproved[i].activity=='facebook'){
          facebookCount++;

        }else if(activitiesImproved[i].activity=='twitter'){
          twitterCount++
        }

     /*for(let j=i;j<activitiesImproved.length;j++){
       if(activitiesImproved[i].duration<=activitiesImproved[j].duration){
         temp=activitiesImproved[i].duration;
       }
     }*/
  }
  if(Math.max(youtubeCount,facebookCount,twitterCount)==youtubeCount)
console.log('Youthube');
else if(Math.max(youtubeCount,facebookCount,twitterCount)==facebookCount)
console.log('Facebook');
else if(Math.max(youtubeCount,facebookCount,twitterCount)==twitterCount)
console.log('Twitter');
}
  /*count=Math.max(youtubeCount,facebookCount,twitterCount);
    console.log(count);
*/

activityUsedMost()

  
