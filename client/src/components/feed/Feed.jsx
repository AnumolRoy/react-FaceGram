import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Posts } from "../../dummyData";

export default function Feed({username}) {
  console.log(username,'hhhhhhhhhhhhh');
const [posts,setPosts]=useState([])

useEffect(()=>{
  const fetchPosts= async()=>{
    const res = username 
    ? await axios.get("http://localhost:8700/posts/profile/"+username)
    : await axios.get("http://localhost:8700/posts/timeline/6370a85ad33a23c81c86837c")
    console.log(res,'ggggggggggggggggggggg');
   setPosts(res.data)
 

  };
  fetchPosts();
},[username])

 console.log(Posts,'lllllllllllll');
 console.log(posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
       {Posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}   
      </div>
    </div>
  );
}
