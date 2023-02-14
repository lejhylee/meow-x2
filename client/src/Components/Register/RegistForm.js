import React from "react";
import useForm from "./useForm";

const RegistForm = () => {

    return (
         <form>
            <div className="row">
                <div className="col-12">
                    <label className='form-label'>NAME</label>
                    <input type="text" className="form-control" name="houseName" id="houseName" />
                </div>
                <div className="col-md-5">
                    <label className='form-label'>TYPE</label>
                    <input type="text" className="form-control" id="type" />
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
                 <button className="w-100 btn btn-lg cst-btn" type="submit">lez git</button>
            </div>
            </div>   
        </form>
    )
}
export default RegistForm;