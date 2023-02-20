import React from 'react';
import useForm from '../Register/useForm'; 
import validate from '../Register/vaildate';


function Login() {  
    const { values, errors, submitting, handleChange, handleSubmit } = useForm ({
        initialValues: { user_id: "", user_pwd : "" },
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
        validate,
    });
    return (
        <form onSubmit={handleSubmit} noValidate> 
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">xxxxx</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">fat-meow meow</p>
                    <div className="d-grid gap-2 col-12 justify-content-sm-center">
                        <input className="form-control" type="text" placeholder='ID'
                            name="user_id"
                            value={values.user_id}
                            onChange={handleChange}
                        />
                        {errors.user_id && <span className="errorMessage">{errors.user_id}</span>}
                        <input className="form-control" type="password" placeholder='PASSWORD'
                            name="user_pwd"
                            value={values.user_pwd}
                            onChange={handleChange}
                        />
                         {errors.user_pwd && <span className="errorMessage">{errors.user_user_pwdid}</span>}
                        <button className="w-100 btn btn-lg cst-btn" type="submit" disabled={submitting}>login</button> 
                    </div>
                </div>
            </div>
        </form>    
 )
}
export default Login;