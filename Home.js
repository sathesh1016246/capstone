import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, useHistory } from 'react-router-dom'
import SignUp from './SignUp'
import image from './images/logo.jpg'
function Home() {
    const history = useHistory();
    const handler = () => {
        history.push("/SignUp")
    }
    return (
        <section className>
            <div className="row row-inverse display-flex">
                <div className="first-fold-container">

                    <h1 className="fs-24-bold">Welcome to Home</h1>

<div className="row">
                    <div className="col" width="30%">
                        <h1 className="fs-36-bold">Buy/Sell Anything,from Anywhere</h1>
                        <div className="container-fluid">
                        <button onClick={handler} type="button"
                            className="btn btn-primary">Start trading</button>
                        </div>
                    </div>
                  
                   
                    <div className="col">
                        <img src={image} width="300px" height="300px" />
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Home