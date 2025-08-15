// import { Link } from "react-router-dom";


// const Register = () => {

// const handleSubmit = (e) => {
//     e.preventDefault(); // <-- এখানে 'Default' ঠিক করুন
//     const form = new FormData(e.target);
//     const name = form.get("name");
//     console.log(name);
// };



//     return (
//        <div className="mt-30 ml-100 ">
//      <h2 className=" font-bold text-2xl ml-10 ">Create a new Account</h2>

// <div className="card bg-base-100  w-full max-w-sm shrink-0   shadow-2xl    ">
//       <div className="card-body ">
//      <form onSubmit={handleSubmit}>
//          <label className="label">Name</label>
//           <input name="name" type="text" className="input" placeholder="Name" />
//           <label className="label">Photo-url</label>
//           <input name="photo" type="text" className="input" placeholder="photo-url" />
//           <label className="label">Email</label>
//           <input name="email" type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input name="password" type="password" className="input" placeholder="Password" />
//           <button className="btn btn-neutral mt-4">Register</button>
//      </form>
//         <div>
//           <h2>Already  have an account? <Link className="text-blue-700" to="/login"> Login</Link></h2>
//         </div>
//       </div>

//     </div>
//     </div>
//     );
// };

// export default Register;
import { Link } from "react-router-dom";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log({ name, photo, email, password });
   
  };

  return (
    <div className="mt-20 ml-80">
      <h2 className="font-bold text-2xl mb-6">Create a new Account</h2>

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="label">Name</label>
            <input name="name" type="text" className="input input-bordered" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input input-bordered" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input input-bordered" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </form>

          <div className="mt-4">
            <h2>
              Already have an account? 
              <Link className="text-blue-700 ml-1" to="/login">Login</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
