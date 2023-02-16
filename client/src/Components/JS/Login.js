import React from 'react';
import useForm from '../Register/useForm'; 
const Login = () => {
    
    return (
        <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold">xxxxx</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">fat-meow meow</p>
                <div class="d-grid gap-2 col-12 justify-content-sm-center">
                    <input className="form-control" type="text"></input>
                    <input className="form-control" type="password"></input>
                    <button className="w-100 btn btn-lg cst-btn" type="submit">login</button> 
                </div>
            </div>
        </div>
 )
}
export default Login;