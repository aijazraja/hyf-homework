//soujanyapolavarapu  sandhana14   cph-kiwi
/* 
Fetch all the 3 classmates repositories at the same time using Promise.all. Remember the all at once
 exercise here?

When you have the data for the different repositories, render the fullname of the repo, url of the repo, 
and the owner of the repo.
 See github-repos as an example of how the renderered repos should look. You are more than welcome to style 
 it a bit nicer! */
const url1 = "https://api.github.com/search/repositories?q=user:soujanyapolavarapu";
const url2 = "https://api.github.com/search/repositories?q=user:qamarfj";
const url3 = "https://api.github.com/search/repositories?q=user:cph-kiwi";


class GetClass {
    constructor(url) {
        this.url = url;

    }
    get() {
        fetch(this.url)
            .then(response => response.json())
            .then((studentData) => {
                const ulElement0 = document.createElement('ul');
                const liElement0 = document.createElement('li');
                liElement0.innerHTML = '<h2>' + studentData.items[0].owner.login + ' repositories<\h2>';
                //console.log('\n\n'+studentData.items[0].owner.login +' repositries \n\n');
                const ulElement1 = document.createElement('ul');
                studentData.items.filter(element => {

                    const liElement1 = document.createElement('li');
                    liElement1.innerHTML = element.name + ' : ' + element.html_url;

                    //console.log(element.name +' '+element.html_url);
                    ulElement1.appendChild(liElement1)
                    liElement0.appendChild(ulElement1)

                });
                
                ulElement0.appendChild(liElement0)
                document.body.appendChild(ulElement0);
            })
    }

}
const student1 = new GetClass(url1);
const student2 = new GetClass(url2);
const student3 = new GetClass(url3);
Promise.all([student1.get(), student2.get(), student3.get()])
    .then(() => {

    })