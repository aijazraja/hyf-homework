    //console.log("hello");
   /* let yearOfBirth=document.getElementById("dateOfBirth").value ;
    console.log(yearOfBirth);*/

    /****************************************Future Age Calculator****************************************************** */
                   
                        /* ************************Human****************************/

    function calculateAge(){

            let yearOfBirth=document.getElementById("dateOfBirth").value ;
            let yearOfFuture=document.getElementById("futureAge").value ;
            let age =yearOfFuture- yearOfBirth;
            let text ="You will be "+age+" years old in "+ yearOfFuture+ ".";
            document.getElementById("ageCount").innerHTML=text;
        

    }

                        /* ************************Dog****************************/

    function calculateDogAge(){
        let dogYearOfBirth = document.getElementById("dogDateOfBirth").value ;
        let dogYearFuture = document.getElementById("dogFutureAge").value ;
        let adogYear = dogYearFuture -dogYearOfBirth ;
        let shouldShowResultInDogYears=document.getElementById("isDogYears").checked;
        //console.log(adogYear);
        
        if(shouldShowResultInDogYears){
            //console.log(shouldShowResultInDogYears);
            adogYear *=5;
            let text1="Your dog will be "+adogYear+" dog years old in "+dogYearFuture;
            document.getElementById("dogAgeCount").innerHTML=text1;

           }else{
            let text1="Your dog will be "+adogYear+" human years old in "+dogYearFuture;
            document.getElementById("dogAgeCount").innerHTML=text1;

           }
        }
/* *********************************************House Price Estimator************************************************************ */

                                 /* ************************Peter****************************/

        let widthPeter =8;
        let deepPeter = 10;
        let heightPeter =10;
        let gardenSizeInM2=100;
        let hunderedM2Price =2500000;
        let volumeInMeters =widthPeter*deepPeter*heightPeter;
        let housePricePeter = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
        //console.log(housePricePeter);
        if( hunderedM2Price>=housePricePeter){
            let text3 ="Actural price for 100m2 house is "+hunderedM2Price+" <br>Peter is paying "+housePricePeter+ " which much less .";
            document.getElementById("peterPrice").innerHTML=text3;
        }else{
            let  text3 ="Actural price for 100m2 house is "+hunderedM2Price+" <br>Peter is paying "+housePricePeter+ " which much more .";
            document.getElementById("peterPrice").innerHTML=text3;
        }



                       /* ************************Julia****************************/

        const widthJulia =5;
        const deepJulia = 11;
        const heighJulia =8;
        const gardnSizeInM2=70;
        const seventyM2Price =1000000;
        const volumeInMetersJulia =widthJulia*deepJulia*heighJulia;
        const housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardnSizeInM2 * 300;
       // console.log(housePriceJulia);
        if( seventyM2Price>=housePriceJulia){
            let text4 ="Actural price for 70m2 house is "+seventyM2Price+" <br>Julia is paying "+housePriceJulia+ " which much less .";
            document.getElementById("juliaPrice").innerHTML=text4;
        }else{
            let  text4 ="Actural price for 70m2 house is "+seventyM2Price+" <br>Julia is paying "+housePriceJulia+ " which much more .";
            document.getElementById("juliaPrice").innerHTML=text4;
        }

        /* *********************************************Ez Namey (Startup name generator)************************************************************ */
        
        function ezNamy(){
            let firstWords= ["Mindstuff","Black","Tech","Diamondback","Jumping","Great","Industry","Zest","Teletrans","Melt"];
            let secondWords=["Corporation","Soapdots App","Slantwise Ltd","Care","Systems","Strut",".Al","Woodpecker Care","Inc","Technologies"];
            let random1= Math.floor(Math.random() * 10) + 0;
            let startupName =firstWords[random1] +" "+ secondWords[random1];
            let text5="Startup Name : "+startupName+ "<br>Press 'Generate' again to get a new name"
            document.getElementById("ezname").innerHTML=text5;
            //console.log(startupName);

        }
        