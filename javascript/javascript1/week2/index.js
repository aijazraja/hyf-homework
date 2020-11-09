
       /************************************************** 
      *       1  :  Flight booking fullname function      *
       ***************************************************/  

           console.log('(1a) : Printing out full name by using returne \n\n ');

     /*************************************************** 
    * (1a) : Printing out full name by using return      *
     ****************************************************/  




const firstName='';
const lastName='';
function getFullName(firstName,lastName){
  return firstName+' '+lastName;
}
let fullName=getFullName("Benjamin", "Hughes");
console.log(fullName);


console.log('\n\n (1b) :       Formal fullname  \n\n ');   


    /********************************************* 
    *  (1b) :       Formal fullname               *
     *********************************************/   
           

const useFormalName = true;
function getFullName(firstName,lastName,useFormalName){
  if(useFormalName)
  return 'Lord'+' '+ firstName+' '+lastName;
  else 
  return firstName+' '+lastName;
}
fullName=getFullName('Benjamin', 'Hughes',false);
console.log(fullName);
const formalName=getFullName('Benjamin', 'Hughes',true);
console.log(formalName);
  // if we will not pass arguments on calling function then it will display
   //nothing 

   console.log('\n\n 2   :    Event application \n\n ');


    /********************************************* 
    *  2   :    Event application                 *
    *********************************************/  



  var d = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

let eventDay1= getEventWeekday(9);    // 9=next event day from today
let eventDay2= getEventWeekday(2);   // 2=next event day from today
console.log('Event day after 9 days from today--> '+eventDay1 );
console.log('Event day after 2 days from today--> '+eventDay2);
  

  function getEventWeekday(dday){
    let today=d.getDay();

     //  let today= 2;   // 2 = Tuesday(enabale to check)
    //  let today=5;   // 5 = Friday, (enable to check)


    let dayIndex=(today+dday) % 7;
    return weekday[dayIndex];
}

console.log('\n\n  3   :    Weather wear  \n\n ');


   /********************************************* 
    *     3   :    Weather wear                  *
    *********************************************/  


function whatToWear(temp){
  if(temp<=5)
  return "Wear snow proof jacket, trouser and shoes ";
  else if(temp<=10)
  return "Wear normal upper,trouser and sneekers";
  else
  return "Wear shorts and a t-shirt";

}
console.log(whatToWear(18));
console.log(whatToWear(10));
console.log(whatToWear(-8));

console.log('\n\n 4   :    Student manager  \n\n ');


    /******************************************** 
    *    4   :    Student manager                *
    *********************************************/ 


const class07Students = [];
let count=0;
function addStudentToClass(studentName) { 

    if(class07Students.includes(studentName)){
            console.log("Student " +studentName+ "  is already in the class");
            
    }else if(count>=7 && studentName=="Margrethe")  {
        class07Students.push(studentName);
        // console.log(class07Students);

    }
      else if(count<7){
               class07Students.push(studentName);
              // console.log(class07Students);
               count++;
    }
    else
                console.log('Cannot add more students to class 07');

}
addStudentToClass("name1");
addStudentToClass("name2");
addStudentToClass("name3");
addStudentToClass("name4");
addStudentToClass("name5");
addStudentToClass("name6");
addStudentToClass("name7");
addStudentToClass("Margrethe");    // Queen is added. Even if the class has been filled out
addStudentToClass("name2");        // loged out:  Student name2  is already in the class
addStudentToClass("name8");        // loged out : Cannot add more students to class 07




function getNumberOfStudents() {
  class07Students.push("name9","name10","name11");   // Add some students to the class.
  class07Students.push("name12","name13","name14");  // Add more students than there is space for
  class07Students.push("name1","name2","name3");     //Add a student that is already in the class
  class07Students.push("Margrethe");                    //Add the Queen to a full class
  //console.log(class07Students);
   return class07Students.length;
}
let numberOfStudents=getNumberOfStudents();
console.log("Total number of students in class = "+numberOfStudents);// log out the number of students =18


console.log('\n\n  5 :  Candy helper   \n\n ');


    /******************************************** 
    *   5   :    Candy helper                    *
    *********************************************/


let boughtCandyPrices = [];
let candyPrice='';
function addCandy(candyType,weight){
 
    if(candyType=='sweet'){
        candyPrice=0.5*weight;
}else if(candyType=='chocolate'){
        candyPrice=0.7*weight;
}else if (candyType=='toffe'){
        candyPrice=1.1*weight;
}else if(candyType=='chewing-gum'){
        candyPrice=0.03*weight;
}
 boughtCandyPrices.push(candyPrice);
// console.log(boughtCandyPrices);
//console.log(candyPrice);
 
}
addCandy("sweet", 20); 
addCandy("chocolate", 20);
addCandy("toffe", 20);
addCandy("chewing-gum", 20);

   let amountToSpend=Math.random() * 100;


// console.log(amountToSpend);

function canBuyMoreCandy() {
    let sum =0;
    for(let i=0; i<boughtCandyPrices.length; i++){
        sum= sum + boughtCandyPrices[i];
        }
        //console.log(sum);
        if (sum<=amountToSpend){
            return true

        }else
        return false;

}
const buyMore=canBuyMoreCandy();
//console.log(c);
if(buyMore){
    console.log("You can buy more, so please do");
}else
     console.log("Enough candy for you!");
addCandy("toffe", 20);
addCandy("chewing-gum", 20);