import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const naviget = useNavigate()
    const location = useLocation()
    console.log("location from login page...",location);
    const handleLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password")

        loginUser(email, password)
        .then((result) => {
            console.log(result.user);
          naviget(location?.state? location.state : "/")
       
        })
        .catch((error) => {
            console.log(error.message);
        })

    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h3 className="text-3xl text-center mt-4 ">Please login </h3>

        <form onSubmit={handleLogin} className="card-body mx-auto md:w-3/4 lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mx-auto md:w-3/4 lg:w-1/2  mt-2 ">
        <p className="ml-9">Do not an account? <span className="ml-3"><Link to="/register" className="font-semibold text-blue-600 underline">Register</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
