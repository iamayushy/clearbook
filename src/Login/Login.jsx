import { Button, Text } from "@mantine/core"
import {FcGoogle} from 'react-icons/fc'
import '../App.css'
const Login = () => {
    return(
        <div className="Home">
            <div className="welcome-text">
                <h1>Welcome to <span className="company-name">Clear Book</span> </h1>
                <p>A single book to make your records clear</p>
            </div>
            <Button className="btn"  leftIcon={<FcGoogle size={24}/>} variant="white">Sign In With Google</Button>
        </div>
    )
}
export {Login}
