import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Serene</h3>
                <span className="registerDesc">Enter your sanctuary of serenity - where introverts connect!</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" type="text" className="registerInput" />
                    <input placeholder="Email" type="email" className="registerInput" />
                    <input placeholder="Password" type="text" className="registerInput" />
                    <input placeholder="Confirm Password" type="text" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                    {/* <span className="registerForgot">Forgot Password?</span> */}
                    <button className="registerRegister">Log into account</button>
                </div>

            </div>
        </div>
    </div>
  )
}
