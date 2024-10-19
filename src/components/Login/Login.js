import "./Login.css"

import Card from "../UI/Card"
import Button from "../UI/Button"

const Login = () => {
    return (
        <Card className="login">
            <form>
                <div className="control">
                    <label for="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    ></input>
                </div>
                <div className="control">
                    <label for="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    ></input>
                </div>
                <div className="actions">
                    <Button type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login