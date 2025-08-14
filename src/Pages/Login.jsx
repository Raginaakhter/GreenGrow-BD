


// import { useTranslation } from "react-i18next";

// export default function Login() {
//   const { t } = useTranslation();

//   return (

// <div>
     
//          <button className= "bg-green-500 hover:bg-green-600 text-white text-center  animate-fadeIn px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-medium hidden md:block">
//           {t("Login")}
//         </button>
// </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Login() {
   const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all duration-200"
    >
   {t("Login")}
    </button>
  );
};


