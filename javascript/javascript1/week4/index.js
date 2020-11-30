
   let names =[];
   let arrTodo=[];

   function checkName(name){
       for(let i=0;i<names.length;i++){
           if(names[i]==name)
           return true;
           else
           return false;

       }
   }


function getReply(command){

    if(typeof(command)!= "string"){
        console.log('Invalid Command')
        return
       // return'command not valid';      
       }
       
   
    if (command.includes('Hello my name is')){
       name=command.slice(17,command.length);
       if(checkName(name)){
        console.log(name +' is already added')
       }else{
        names.push(name);
        //console.log(name);
        
        console.log('Nice to meet you '+name);
       }
      
    }
    if (command.includes('What is my name')){
        console.log('Your name is '+name)
    }
    if (command.includes('Add')){
        let todo=command.split(" ");
      
             arrTodo.push(todo[1]);
             console.log(todo[1]+' is added to your todo');
             
        }
        
    if (command.includes('Remove')){
        let toRemove=command.split(" ");
        let toRemove1=toRemove[1];
        for (let i=0;i<=arrTodo.length;i++){
            if(arrTodo[i]==toRemove1){
                let temp=arrTodo[i];
                arrTodo[i]=arrTodo[0];
                arrTodo[0]=temp;
                arrTodo.shift();
                console.log(toRemove1+' is removed from you todo')
            }
        }
    }

}

getReply(1234); // Output : Invalid command
getReply('Hello my name is Benjamin');
getReply('Hello my name is Benjamin'); // output : Benjamine is already added
getReply('What is my name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Add eating to my todo');
getReply('Add drinking to my todo');
getReply('Remove eating to my todo');
getReply('Remove fishing to my todo');
console.log(arrTodo); // output : what is in my todo??



 /******************************************* */
     console.log('\n\n What is date today? \n')
 /******************************************* */  

 

function getDateToday(){
    const date=new Date();
    const day=date.getDate();
    //console.log(day);
    const months = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    const month=months[date.getMonth()] ;
    //let mon=date.getMonth()+1;
   // console.log(month);
    const year=date.getFullYear();
    //console.log(year);
    return day+'. of '+ month +' '+year;

}

let dateToday=getDateToday();
console.log(dateToday);


/******************************************* */
    console.log('\n\n Get simple math \n')
/******************************************* */  

function getSimpleMath(command){
    var numb = command.match(/\d/g);
    //console.log(numb[0]+ numb[1]);
    let numb1=parseInt(numb[0]);
    let numb2=parseInt(numb[1]);

    if(command.includes('+')){
        return numb1 + numb2;
       }
    if(command.includes('*')){
        return numb1 * numb2;
       }
    
}
const sum=getSimpleMath('What is 3+4');
console.log('Sum = '+sum); //output  7
const multiple=getSimpleMath('What is 3*4');
console.log('Multiple = '+multiple); //output 12


/*****************************************************/
     console.log('\n\n Set timer for 4 minutes \n Wait for 4 minutes for ouput')
/*****************************************************/  

function setTimer(){
    console.log('Timer done'); // will print this after 4 minutes

}
setTimeout(setTimer,240000); // 4 min = 240000 milliseconds
//setTimer();



/*****************************************************/
console.log('\n\n Add some more commands \n')
/*****************************************************/  


getReply('Add walking to my todo');
getReply('Add shoping to my todo');
getReply('Add swimming to my todo');
getReply(78654); // Ouput : Invalid command
getReply('Remove singing to my todo');
console.log(arrTodo); // output : what is in my todo??