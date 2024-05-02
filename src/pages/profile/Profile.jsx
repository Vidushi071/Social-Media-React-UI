import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Leftside from "../../components/leftside/Leftside";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
      <Leftside/>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/posts/1.avif"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/6.avif"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mary Jane</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
           
          </div>
          
        </div>
      </div>
    </>
  )
}
