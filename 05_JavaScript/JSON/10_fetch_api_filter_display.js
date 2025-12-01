fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    const filtered = data.filter(post => post.userId === 2);
    console.log(filtered);
})
.catch(err => console.log(err));
