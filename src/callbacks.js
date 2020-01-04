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

function createPost(post,callback){
  setTimeout(() => {
    posts.push(post)
    callback();
  },2000);
}

createPost({title:"Post three", body: "I am post three"},Post);
