
// // import { useNavigate } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // export default function Login() {
// //    const { t } = useTranslation();
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     navigate("/login");
// //   };

// //   return (
// //  <div>
// //      <button
// //       onClick={handleLogin}
// //       className="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all duration-200"
// //     >
// //    {t("Login")}
// //     </button>
// //  </div>
// //   );
// // };
// import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import auth from "../firebase/Firebase.config";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// const Login = () => {


// const {userLogin,setUser}= useContext(AuthContext)



//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//  const form = e.target;
//  const email = form.email.value;
//   const password = form.password.value;
 
  
//   console.log({email,password});
//   userLogin(email,password)
//   .then(result=>{
//     const user = result.user;
//     setUser(user)
//   })
//   .catch((error) => {
// alert(error.code)

//   });



//   }

// const provider = new GoogleAuthProvider();

//   const handleGoogleSignin =()=>{

//     console.log(auth,provider);
//     console.log("googole comming soon");
// signInWithPopup(auth, provider)
// .then((result)=>{
//   console.log(result.user);
// })
// .catch(error=>{
//   console.log("Error",error);
// })

//   }
//   return (
//     <div className="mt-30 ml-100 ">
//      <h2 className=" font-bold text-2xl ml-10 ">Login Your Account</h2>

// <div className="card bg-base-100  w-full max-w-sm shrink-0   shadow-2xl    ">
//       <div className="card-body ">
//    <form onSubmit={handleSubmit} >
//       <label className="label">Email</label>
//           <input name="email" type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input name="password" type="password" className="input" placeholder="Password" />
//           <div><a className="link link-hover">Forgot password?</a></div>
//           <button className="btn btn-neutral mt-4">Login</button>
//    </form>
//         <div>
//           <h2>Dont have an account? <Link className="text-blue-700" to="/register"> Register</Link></h2>
//         </div>
//       </div>
      

//       <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5]">
//         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//         Login with Google
//       </button>

//     </div>
//     </div>
//   );
// };
// export default Login;


import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log("Logged in user:", user);
        navigate("/shop"); // login successful হলে Shop page এ নেভিগেট
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Google user:", user);
        navigate("/shop"); // Google login successful হলে Shop page
      })
      .catch(error => {
        console.error("Google login error:", error);
      });
  };

  return (
    <div className="mt-30 ml-100">
      <h2 className="font-bold text-2xl ml-10">Login Your Account</h2>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <div><a className="link link-hover">Forgot password?</a></div>

            <button className="btn btn-neutral mt-4">Login</button>
          </form>

          <div className="mt-2">
            <h2>
              Don't have an account? 
              <Link className="text-blue-700 ml-1" to="/register">Register</Link>
            </h2>
          </div>
        </div>

        <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

