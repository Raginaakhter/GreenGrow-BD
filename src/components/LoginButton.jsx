// AuthButton.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider"; 
import { useTranslation } from "react-i18next";

const LoginButton = () => {
  const { user, logOut } = useContext(AuthContext);
  const { t } = useTranslation();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <>
      {user?.email ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          {t("Logout")}
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all duration-200">
            {t("Login")}
          </button>
        </Link>
      )}
    </>
  );
};

export default LoginButton;
