import React, {Component, useRef, useState} from 'react';
//import {Button} from "react-bootstrap";
import {createEvent} from "@testing-library/react"
import PostList from "../Components/UI/input/PostList";
import PostForm from "../Components/UI/input/PostForm";
import MySelect from "../Components/UI/select/MySelect";

function Blog() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
    ])

    const [selectedSort, setSelectedSort] = useState()


    const createPost = (newPost) => {
        setPosts ([...posts, newPost])
   }


      const removePost = (post) =>{
        setPosts(posts.filter(p=> p.id !== post.id))
   }

   const sortPosts = (sort) => {
       setSelectedSort(sort)
       setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
   }

    return(
        <div className="Blog">
            <PostForm create= {createPost}/>
            <hr style={{margin:'15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sort => sortPosts(sort)}
                    defaultValue="Сортування"
                    options={[
                        {value: 'title', name: 'За назвою'},
                        {value: 'body', name: 'За описом'},
                    ]}
                    />
            </div>
            {posts.length !== 0
            ?
            <PostList remove={removePost} posts={posts} title="Пости про квіти"/>
            :
            <h1 style={{textAlign: 'center'}}>Пости не знайдено!</h1>
            }

        </div>
    );
}
export default Blog;
