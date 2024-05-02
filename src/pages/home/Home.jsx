import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
import Leftside from "../../components/leftside/Leftside"

export default function Home() {
  return (
    <>
        <Topbar/>
        <div className="homeContainer">
          <Leftside/>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
          {/* <Leftside/> */}
        </div>
        
    </>
    

  )
}
