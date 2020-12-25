/*Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. 
The getCurrentPosition function is probably going to throw an error, 
but that is fine. As long as you can use it as a promise.Example of usage */

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});


function setTimeoutPromise(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();

        }, seconds * 3);
    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;


        console.log('Location\nLatitude :' + latitude + '\nLongitide :' + longitude);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log('Error on locating you :' + error);
    });
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}