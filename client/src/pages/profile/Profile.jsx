import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import {useEffect,useState} from "react";

export default function Profile() {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER

  const [user,setUser]=useState({})

  useEffect(()=>{
    const fetchUser= async()=>{
      const res =await axios.get(`/users?username=jane`);
     setUser(res.data)
  
    };
    fetchUser();
  },[])




  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg `}               alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                {/* console.log("uuuuuuuuuuuuu"); */}
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="jane"/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
