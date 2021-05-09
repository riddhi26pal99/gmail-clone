import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase.config'
import "./Login.css"

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then( ({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            })
            .catch( (error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0DihHJVU0l_7jidXTUSIyI8TqdbFlAzlhSJfxXymwWknKKqP9fV1DEwbSnOMcDuQqHg&usqp=CAU " 
                alt ="" />
                <Button 
                    onClick = {signIn} 
                    variant="contained"     
                    color="primary"
                >
                    Login
                </Button>

            </div>
        </div>
    )
}

export default Login
