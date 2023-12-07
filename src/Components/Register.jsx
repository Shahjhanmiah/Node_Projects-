import { Link } from "react-router-dom";
import logo from '../assets/Tablet login-bro.png'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        const newUser = { name, email, password }
        console.log(newUser);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })

        fetch('https://nodes-a2y3.onrender.com/Register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New User Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })



        



            .then(error => console.log(error))
    }


    return (
        <div>

            <div>

                <div className="hero w-full my-20">
                    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img className='w-3/4' src={logo} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                            <h1 className="text-5xl text-center font-bold">Register</h1>
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>



                            <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                            <p className='text-center'>All users here  Register data saw?
                                <Link className='text-blue-600 font-bold' to="/alluser">Alluser</Link> </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;