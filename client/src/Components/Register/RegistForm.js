import React from "react";
import useForm from "./useForm";

function RegistForm() {
    const { values, errors, submitting, handleChange, handleSubmit } = useForm ({
        initialValues: { houseName: "", type : "" },
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
         <form onSubmit={handleSubmit} noValidate>
            <div className="row">
                <div className="col-12">
                    <label className='form-label'>NAME</label>
                    <input className="form-control"
                        name="houseName"
                        type="text" 
                        value={values.houseName}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-5">
                    <label className='form-label'>TYPE</label>
                    <input className="form-control"
                        type="text" 
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <label className='form-label'>MANAGE</label>
                    <input type="text" className="form-control" id="manage" />
                </div>
                <div className="col-md-3">
                    <label className='form-label'>COUNT</label>
                    <input type="text" className="form-control" id="count" />
                </div>
            <hr className='my-4'></hr>
            <div className="d-grid gap-2 col-6 mx-auto">
                 <button className="w-100 btn btn-lg cst-btn" type="submit" disabled={submitting}>lez git</button>
            </div>
            </div>   
        </form>
    )
}
export default RegistForm;