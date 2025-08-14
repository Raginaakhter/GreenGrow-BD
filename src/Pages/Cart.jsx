// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// const SearchCart = () => {
//   const { t } = useTranslation();

//   return (
//     <motion.div className="flex items-center gap-3" 
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: 0.3 }}
//     >
//       {/* Search */}
//       <input
//         type="text"
//         placeholder={t("search")}
//         className="px-3 py-1 rounded-md text-black outline-none"
//       />
//       {/* Cart */}
//       <span className="text-xl cursor-pointer">🛒</span>
//     </motion.div>
//   );
// };

// export default SearchCart;


// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// export default function Cart() {
//    const { t } = useTranslation();
//   const navigate = useNavigate();

//   const handleCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <button
//       onClick={handleCart}
//       className="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all duration-200"
//     >
//    {t("cart")}
//     </button>
//   );
// };



