import React, {Component,useState} from "react";
import Mybutton from "../button/MyButton";
import MyInput from "./MyInput";
import {Button} from "react-bootstrap";
import classes from "../button/Mybutton.module.css";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
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
    )
}

export default PostForm;