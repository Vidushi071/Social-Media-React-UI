import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Serene</h3>
                <span className="loginDesc">Enter your sanctuary of serenity - where introverts connect!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="text" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegister">Create a New account</button>
                </div>

            </div>
        </div>
    </div>
  )
}
