import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Registration = () => {
    
    const { creatUser} = useContext(AuthContext)
    console.log(creatUser);
    const handleRegister = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password")
        console.log(form.get("name"));

        creatUser(email , password)
        .then((result) => {
            console.log(result.user);
            
        } )
        .catch((error) => {
            console.log(error.message);
        })
    
    }
  return (
    <div>

        <Navbar></Navbar>

      <div className="">
        <h3 className="text-3xl text-center mt-4 ">Please Register </h3>

        <form
          onSubmit={handleRegister}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="mx-auto md:w-3/4 lg:w-1/2  mt-2 ">
        <p className="ml-9">Allready have an account? <span className="ml-3"><Link to="/login" className="font-semibold text-blue-600 underline">Login</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
