import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function rightbar({profile}) {
  

    const HomeRightbar = () =>{
        return(
            <>
                <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                <span className="birthadyText">
                    <b>Peter Parker</b> and <b>5 other friends</b> have a birthday today!
                </span>
            </div>
            <img className="rightbarAd" src="assets/ad2.avif" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online key={u.id} user = {u}/>
                ))}

            </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return (
            <>
                <h4 className="rightbarTitle">User Information Title</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:  </span>
                        <span className="rightbarInfoVal">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:  </span>
                        <span className="rightbarInfoVal">London</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:  </span>
                        <span className="rightbarInfoVal">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.avif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Jane</span>
                    </div>
                </div>
            </>
        )
    }

    return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            
        </div>
    </div>
  )
}
