const posts = [
  {title: "Post one", body: "I am post one"}
  ,{title: "Post two", body: "I am post two"}
]
function Post(){
  setTimeout(() => {
    let output = ``;
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  },1000);
}

function createPost(post){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      posts.push(post)
      resolve();
    },2000);
  });
}
//
// createPost({title:"Post three", body: "I am post three"})
//   .then(Post)
//   .catch(err => console.log(err));
//
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve , reject) =>
//   setTimeout(resolve,2000, "Goodbye")
// );
// const promise4 = fetch("http://jsonplaceholder.typicode.com/users").then((res) =>
//   res.json()
// );
// Promise.all([promise1, promise2, promise3,promise4]).then((values) => {
//   console.log(values);
// });
async function init(){
  await createPost({title:"Post three", body: "I am post three"});
  Post();
}
init();

//asnyc await with fetch
async function fetchUsers(){
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
