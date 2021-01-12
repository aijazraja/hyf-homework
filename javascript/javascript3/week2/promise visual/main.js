// This code will move the li to the position 100, 100. Calling moveElement will return a promise that 
//resolves after the li element has been moved.
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const spanTag = document.getElementById('span')

function translateOneByOne() {
    moveElement(redBox, { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) })
        .then(() => {
            moveElement(blueBox, { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) })
                .then(() => {
                    moveElement(greenBox, { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) })
                        .then(() => {
                            spanTag.style.display = "block";

                            console.log("Green Element has been moved");
                        });

                    console.log("Blue Element has been moved");
                });

            console.log("Red Element has been moved");
        });
}

translateOneByOne();


function translateAllAtOnce() {
    Promise.all([moveElement(redBox, { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) }),
    moveElement(blueBox, { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) }),
    moveElement(greenBox, { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) })])
        .then(() => {
            spanTag.style.display = "block";
            console.log('All elements have been moved at same time')
        })
}

translateAllAtOnce();
