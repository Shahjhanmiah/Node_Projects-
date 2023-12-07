import { Link } from "react-router-dom";
import logo from '../assets/Tablet login-bro.png'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    login(email, password)
      .then(result => {

        console.log(result.user)

      })
    // Swal and fire 
    Swal.fire({
      title: 'Success!',
      text: 'User login Successfully',
      icon: 'success',
      confirmButtonText: 'Confirm'
    })


      .catch(error => console.log(error))
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
              <h1 className="text-5xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleLogin} className="card-body">

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
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>
              </form>

              <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/Register">Register</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Login;