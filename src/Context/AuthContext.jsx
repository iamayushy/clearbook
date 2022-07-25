import { createContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { userAuth } from "../FirebseConfig";


const AuthContext = createContext()

const HandleContext = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [userDetails, setUserDetails] = useState({
        "name":'',
        "email": '',
        "image": ''
    })
    onAuthStateChanged(userAuth, (user) => {
        if(user){
          setIsAuth(true)
          const details = {
            name: user.displayName,
            email: user.email,
            token: user.getIdToken(),
            image: user.photoURL
          }

          setUserDetails(details)
        }
        else{
          setIsAuth(false)
        }
      })

      const handleLogout = () => {
        signOut(userAuth)
        .then(() => {
            setIsAuth(false)
        })
        .catch(e => {
            console.log(e)
        })
      }

    return(
        <AuthContext.Provider value={{
            userDetails,
            isAuth, 
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {HandleContext, AuthContext}
