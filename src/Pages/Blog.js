import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import PostList from "../Components/UI/input/PostList";
import MyInput from "../Components/UI/input/MyInput";
import classes from "../Components/UI/button/Mybutton.module.css";

export default function Blog() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
    ])
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
      e.preventDefault()
      setPosts([...posts, {...post, id: Date.now()}])
      setPost({title: '', body: ''})
    }
    console.log(posts);
    console.log(post);

    return(

        <div className="App">
            <PostList posts={posts} title="Пости про квіти"/>

            <form>
                <MyInput
                    value={post.title}
                    onChange={e =>setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Назва поста"/>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Опис поста"/>
                <Button onClick={addNewPost}
                className={classes.MyBtn}
                >Створити пост</Button>
            </form>
        </div>
    )
};
