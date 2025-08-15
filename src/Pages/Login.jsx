
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Login() {
   const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
 <div>
     <button
      onClick={handleLogin}
      className="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all duration-200"
    >
   {t("Login")}
    </button>
 </div>
  );
};


