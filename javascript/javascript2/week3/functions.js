/* Finctions as variable */
                            console.log('Exercise 1 \n\n')
//const functionsArray=[function1(),function2(),function3()];
var funcs = [
    function () {
        console.log('Body Function 1 [0]')
    },
    function () {
         console.log('Body Function 2 [1]')
    },function () {
        console.log('Body Function 3 [2]')
    }
    ];
    
    funcs.forEach(function (func) {
    func(); // outputs  1, then 2
    });
    //for (let i = 0; i < funcs.length; i++) funcs[i]();
    
    //Create a function as a const and try creating a function normally. 
    //Call both functions. Read up on this if you are interested:

                          console.log('\n\nExercise 2 \n\n')
    
    function functionTwo() {
        console.log('Body funnction two.Normal function')
    }
    const functionOne = function() {
        console.log('Body funnction One.Function with const')
    
    }
    functionOne();
    functionTwo();
     

                            console.log('\n\nExercise 3 \n\n')
    //Create an object that has a key whose value is a function. 
    //Try calling this function.
    const object={
        function:()=>{
            console.log('This function is value of key of object');
           },
           Name:'Aijaz',
    }
    object.function();