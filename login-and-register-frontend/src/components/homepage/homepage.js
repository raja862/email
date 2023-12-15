import React from "react"
import "./homepage.css"


const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            <h1 className="movie">WELL COME TO MOVIEWORLD</h1>
            
{/* <h2 className="click"><a href="https://movierating-squirrel-f116a9.netlify.app">CLICK HERE TO SEE THE DIFFERENT TYPE OF MOVIES</a></h2> */}

            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage