
import React from 'react';
import Image from 'next/image';
import login from '../public/images/registr-login.png'
const Register = () => {

    const handelSubmit = (e) =>{
      e.preventDefault();
    }

    return (
        <div className='container py-5'>
              <h1>Registeration Form</h1>
            <div className="row">
                <form className='col-md-8 mt-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={handelSubmit} type="submit" className="btn btn-secondary px-5 mt-2">Register</button>
                </form>
                <div className="col-md-4 text-center">
                  <Image src={login} width={400} height={400} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Register;