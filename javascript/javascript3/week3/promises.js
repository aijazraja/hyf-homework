//soujanyapolavarapu  sandhana14   cph-kiwi
/* 
Fetch all the 3 classmates repositories at the same time using Promise.all. Remember the all at once
 exercise here?

When you have the data for the different repositories, render the fullname of the repo, url of the repo, 
and the owner of the repo.
 See github-repos as an example of how the renderered repos should look. You are more than welcome to style 
 it a bit nicer! */
const url1 =
  "https://api.github.com/search/repositories?q=user:soujanyapolavarapu";
const url2 = "https://api.github.com/search/repositories?q=user:qamarfj";
const url3 = "https://api.github.com/search/repositories?q=user:cph-kiwi";

class GetStudentRepos {
  constructor(url) {
    this.url = url;
  }
  get() {
    fetch(this.url)
      .then((response) => response.json())
      .then((studentData) => {
        GetStudentRepos.randerData(studentData);
      });
  }
  static randerData(studentData) {
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    liTag.innerHTML =
      "<h2>" + studentData.items[0].owner.login + " repositories<h2>";
    //console.log('\n\n'+studentData.items[0].owner.login +' repositries \n\n');
    const ulElement1 = document.createElement("ul");
    studentData.items.forEach((element) => {
      const liElement1 = document.createElement("li");
      liElement1.innerHTML = element.name + " : " + element.html_url;

      //console.log(element.name +' '+element.html_url);
      ulElement1.appendChild(liElement1);
      liTag.appendChild(ulElement1);
    });

    ulTag.appendChild(liTag);
    document.body.appendChild(ulTag);
  }
}
const student1 = new GetStudentRepos(url1);
const student2 = new GetStudentRepos(url2);
const student3 = new GetStudentRepos(url3);
Promise.all([student1.get(), student2.get(), student3.get()]).then(() => {});
