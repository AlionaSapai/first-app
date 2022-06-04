import React from "react";
import classes from './posts.module.css';
import MyButton from "../button/MyButton"

const PostItem = (props) => {
    return (
        <div className={classes.post}>
            <div className="post_content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <button onClick={() =>
                props.remove(props.post)}>Видалити</button>
            </div>
        </div>
    );
}

export default PostItem;