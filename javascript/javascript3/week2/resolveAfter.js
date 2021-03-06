/* Create a function that has one parameter: resolveAfter. Calling this function will
 return a promise that resolves after the resolveAfter seconds has passed.
When you have written the promise, use it with async/await */

delay(8).then((message) => {
    console.log(message); // logged out after 8 seconds
})
    .catch((error) => {
        console.log(error);

    });

function delay(seconds) {
    return new Promise((resolve, reject) => {
        console.log('wait for ' + seconds + ' sec')
        setTimeout(() => {
            if (seconds >= 8)
                resolve('logged out after 8 seconds');// message
            else
                reject('logged out before 8 seconds');// error

        }, seconds * 1000);
    });
  }

                //async wait
delayAscync(8).then(() => {
    console.log("I am called asynchronously"); 
})
 
async function delayAscync(seconds) {
     setTimeout(() => {
        console.log('After 8 seconds')
    }, seconds * 1000);
  }
