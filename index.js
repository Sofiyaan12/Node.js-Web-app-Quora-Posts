const express = require('express');
const app = express();
let port = 8080;
const path = require('path');

const { v4: uuidv4 } = require('uuid');
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); 

let posts = [
{
    id : uuidv4(),
    username : "Mohammed Sofiyaan",
    content : "I am a software engineer",
},]; 

app.get('/posts', (req, res) => {    
    res.render("index.ejs", { posts }); 
}
);

app.get('/posts/new', (req, res) => {    
    res.render("new.ejs"); 
}
);

app.post('/posts', (req, res) => {    
    const { username, content } = req.body;
    console.log("New Post Submitted:");
    console.log("Username:", username);
    console.log("Content:", content);

    posts.push({ id: uuidv4(), username, content });

    res.redirect('/posts'); 
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    console.log("Post ID:", id);
    console.log("Post Username:", post.username);
    console.log("Post Content:", post.content);
   res.render("show.ejs", { post });
});

app.patch('/posts/:id', (req,res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((post) => post.id === id);
    if (post) {
        post.content = newContent;
        res.redirect('/posts'); 
    } else {
        res.status(404).send("Post not found");
    }
});


app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => id === post.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render("edit.ejs", { post }); 
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(post => post.id !== id);
    res.redirect('/posts'); 
});


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
    }
);   
