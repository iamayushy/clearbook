import { Button, Text } from "@mantine/core"
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"
import {userAuth} from '../FirebseConfig'
import '../App.css'
const Login = () => {
    const provider = new GoogleAuthProvider()

    const handleAuth = () => {
       signInWithPopup(userAuth, provider)
       .then((result) => {
        const crediential = GoogleAuthProvider.credentialFromResult(result)
        const token = crediential.accessToken

        const user = result.user
        console.log(user)
       })
       .catch((error) => {
        const crediential = GoogleAuthProvider.credentialFromError(error)
       })
    }



    return(
        <div className="Home">
            <div className="welcome-text">
                <h1>Welcome to <span className="company-name">Clear Book</span> </h1>
                <p>A single book to make your records clear</p>
            </div>
            <Button onClick={handleAuth} className="btn"  leftIcon={<FcGoogle size={24}/>} variant="white">Sign In With Google</Button>
        </div>
    )
}
export {Login}
