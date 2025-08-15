
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Register = () => {
   

// const {createNewUser,setUser}=useContext(AuthContext);




//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     const form = new FormData(e.target);
//     const name = form.get("name");
//     const photo = form.get("photo");
//     const email = form.get("email");
//     const password = form.get("password");



//     console.log({ name, photo, email, password });

//     createNewUser(email,password)
//     .then(result=>{
//         const user = result.user;
//         setUser(user)
//         console.log(user);
//     })
//      .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode,errorMessage);
//   });

   
//   };

//   return (
//     <div className="mt-20 ml-80">
//       <h2 className="font-bold text-2xl mb-6">Create a new Account</h2>

//       <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//         <div className="card-body">
//           <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//             <label className="label">Name</label>
//             <input name="name" type="text" className="input input-bordered" placeholder="Name" />

//             <label className="label">Photo URL</label>
//             <input name="photo" type="text" className="input input-bordered" placeholder="Photo URL" />

//             <label className="label">Email</label>
//             <input name="email" type="email" className="input input-bordered" placeholder="Email" />

//             <label className="label">Password</label>
//             <input name="password" type="password" className="input input-bordered" placeholder="Password" />

//             <button type="submit" className="btn btn-neutral mt-4">Register</button>
//           </form>

//           <div className="mt-4">
//             <h2>
//               Already have an account? 
//               <Link className="text-blue-700 ml-1" to="/login">Login</Link>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Registered user:", user);

        // User successful register হলে home page এ redirect
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error.code, error.message);
      });
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full max-w-sm">
        <h2 className="font-bold text-2xl mb-6 text-center">Create a new Account</h2>

        <div className="card bg-base-100 shadow-2xl p-6">
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

          <div className="mt-4 text-center">
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
