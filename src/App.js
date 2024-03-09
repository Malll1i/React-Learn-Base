import React, { useState, useRef } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import PostItem from "./components/postItem";
import './index.css'
import PostList from "./components/postList";
import MyButton from "./components/UI/button/myButton";
import MyInput from "./components/UI/input/Myinput";



function App() {

  

  //TODO это пропсы
  const [post, newPost] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form>
        <input ref={bodyInputRef} type="text"/>
        {/* <MyInput 
          ref= {bodyInputRef}
          value = {title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Описание поста"
        /> */}
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton  onClick={addNewPost}>Добавить</MyButton>
      </form>
      <PostList post = {post} key={post.id}/>
    </div>
  );
}

export default App;
