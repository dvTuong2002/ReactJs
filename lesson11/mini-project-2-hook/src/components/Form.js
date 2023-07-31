import React from 'react'

function Form({onToggle}) {

    const handleToggle = () =>{
        onToggle(false);
    }

    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Task Name"

                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="ds"
                            id="inputDs"
                            className="form-control"
                            required="required"

                        >
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success">
                        Submit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={handleToggle}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form