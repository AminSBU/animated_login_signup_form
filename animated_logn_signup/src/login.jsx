
function Login()
{
    return(
        <>
            <div className="main-container">
                <div className="login">
                    <form action="#">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="username" required></input>
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="password" required></input>
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <div className="forget-link">
                            <a href="#">forget password?</a>
                        </div>
                        <button type="submit" class="btn">Login</button>
                    </form>
                </div>

                <div className="register">
                    <form action="#">
                        
                    </form>
                </div>

                <div className="toggle-box">
                    
                </div>
            </div>
        </>
    );
}

export default Login;