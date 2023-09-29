import "/css/login.css"

export default function Login() {
    return (
        <div className="login-container">
            <form action="Dashboard">
                <div className="form">
                    <div className="subtitle text-center">Login whit your account</div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" placeholder="" />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">Email
                        </label>
                    </div>
                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="password" placeholder="" />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder">Password</label>
                    </div>
                    <button type="text" className="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

