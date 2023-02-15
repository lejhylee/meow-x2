import React from "react";
import useForm from "./useForm";
import validate from "./vaildate";

function RegistForm() {
    const { values, errors, submitting, handleChange, handleSubmit } = useForm ({
        initialValues: { houseName: "", type : "" },
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
        validate,
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
                        {errors.houseName && <span className="errorMessage">{errors.houseName}</span>}
                    </div>
                        <div className="col-md-7">
                            <label className='form-label'>TYPE</label>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">A+B</option>
                                </select>
                        </div>
                        <div className="col-md-5">
                            <label className='form-label'>COUNT</label>
                            <input type="number" className="form-control" id="count" />
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