const text1 = document.getElementById('searchedWord');
const number1 = document.getElementById('noOfImages');
const ulTag = document.createElement('ul');
const divTag = document.getElementById('images');

document.getElementById('submit').addEventListener('click', displayGif);

number1.addEventListener('keyup', displayGif);

function displayGif() {
  document.getElementById('message').innerHTML = ' ';
  document.removeEventListener('click', displayGif);
  clearOldList()
  const text = text1.value.toLowerCase();
  const number = number1.value;
  console.log(number);
  if (text == '')
    document.getElementById('message').innerHTML = 'Please enter type of images';
  else if (number == '') {
    document.getElementById('message').innerHTML = 'Please enter number of images';
  }

  fetch("https://api.giphy.com/v1/gifs/search?api_key=pCQn2JkrXXem3ikc8JqOzBIxH7zJVYOw&q=" + text + "&limit=" + number + "&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then((imagesData) => {
      imagesData.data.forEach(oneElement => {
        let liTag = document.createElement('li');
        let image = document.createElement('img');
        image.src = oneElement.images.original.url;
        liTag.appendChild(image);
        ulTag.appendChild(liTag);
        divTag.appendChild(ulTag);

      });
      //console.log(imagesData.data[0].images.original.url);
    });
}

function clearOldList() {
  while (ulTag.children.length > 0) {
    ulTag.removeChild(ulTag.childNodes[0])
  }
}
