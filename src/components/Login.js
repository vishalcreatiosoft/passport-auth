import React, { useState} from 'react';

const Login = () => {

    return (
        <div className="container my-3 mt-3">
            <div className="col-md-6" style={{margin : "auto"}}>
                <h2 className="mt-4 mb-4" style={{textAlign :"center"}} > Login here </h2>
                <form >
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email"  aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login