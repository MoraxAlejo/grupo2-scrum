import "../../css/login.css"

export default function Login() {
  return (
    <div className="login-container">
        <form action="">
            <h1>Login</h1>
            <div className=" bg-slate-50 flex">
                <input type="text" placeholder="Email/Username" />
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male"/>
            </div>
            <div className=" bg-slate-50 flex">
                <input type="text" placeholder="Password" />
                <img width="48" height="48" src="https://img.icons8.com/sf-regular-filled/48/password.png" alt="password"/>
            </div>
        </form>
    </div>
  )
}

