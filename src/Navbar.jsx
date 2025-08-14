// import { NavLink, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Login from "./Pages/Login";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const [langOpen, setLangOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: t("home"), path: "/" },
//     { name: t("shop"), path: "/shop" },
//     { name: t("contact"), path: "/contact" },
//   ];

//   const languages = [
//     { code: "en", label: "English" },
//     { code: "bn", label: "বাংলা" },
//     { code: "hi", label: "हिन्दी" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full top-0 left-0 z-50 transition-all ${
//         scrolled ? "bg-sky-600 shadow-lg" : "bg-sky-500"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3 text-white">
//         {/* Logo */}
//         <motion.div
//           className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//         >
//           🌱 GreenGrow BD
//         </motion.div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 items-center">
//           {links.map((link) => (
//             <motion.li key={link.path} whileHover={{ scale: 1.1 }}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-400 font-bold"
//                     : "hover:text-yellow-300 transition-colors"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </motion.li>
//           ))}

//           {/* Search */}
//           <motion.li whileFocus={{ scale: 1.02 }}>
//             <motion.input
//               type="text"
//               placeholder={t("search")}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="px-3 py-2 rounded-md outline-none border-2 border-gray-300 focus:border-green-500 transition-colors duration-300"
//             />
//           </motion.li>

//           {/* Cart */}
//           <motion.li
//             className="text-xl cursor-pointer"
//             onClick={() => navigate("/cart")}
//             whileHover={{ scale: 1.2 }}
//           >
//             🛒
//           </motion.li>

//           {/* Login */}
//           <motion.li whileHover={{ scale: 1.05 }}>
//             <Login />
//           </motion.li>

//           {/* Language Dropdown */}
//           <li className="relative">
//             <motion.button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-200"
//               whileHover={{ scale: 1.05 }}
//             >
//               🌐 {i18n.language.toUpperCase()}
//             </motion.button>

//             <AnimatePresence>
//               {langOpen && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute right-0 mt-1 bg-white text-black rounded-md shadow-md min-w-[120px] overflow-hidden"
//                 >
//                   {languages.map((lng) => (
//                     <li
//                       key={lng.code}
//                       onClick={() => {
//                         i18n.changeLanguage(lng.code);
//                         setLangOpen(false);
//                       }}
//                       className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
//                         i18n.language === lng.code ? "bg-gray-100" : ""
//                       }`}
//                     >
//                       {lng.label}
//                     </li>
//                   ))}
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center gap-4">
//           <div
//             className="text-xl cursor-pointer"
//             onClick={() => navigate("/cart")}
//           >
//             🛒
//           </div>
//           <div
//             className="text-2xl cursor-pointer"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✖" : "☰"}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-sky-400 text-white flex flex-col gap-3 px-5 py-4 shadow-md"
//           >
//             {links.map((link) => (
//               <li key={link.path}>
//                 <NavLink
//                   to={link.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-yellow-400 font-bold"
//                       : "hover:text-yellow-300 transition-colors"
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}

//             <motion.li>
//               <motion.input
//                 type="text"
//                 placeholder={t("search")}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="px-3 py-2 rounded-md w-full outline-none border-1 border-gray-300 focus:border-green-500 transition-colors duration-300"
//               />
//             </motion.li>

//             <motion.li>
//               <Login />
//             </motion.li>

//             <li className="relative">
//               <motion.button
//                 onClick={() => setLangOpen(!langOpen)}
//                 className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-200 w-full justify-center"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 🌐 {i18n.language.toUpperCase()}
//               </motion.button>

//               <AnimatePresence>
//                 {langOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-1 bg-white text-black rounded-md shadow-md w-full overflow-hidden"
//                   >
//                     {languages.map((lng) => (
//                       <li
//                         key={lng.code}
//                         onClick={() => {
//                           i18n.changeLanguage(lng.code);
//                           setLangOpen(false);
//                           setMenuOpen(false);
//                         }}
//                         className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
//                           i18n.language === lng.code ? "bg-gray-100" : ""
//                         }`}
//                       >
//                         {lng.label}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </li>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Pages/Login";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // ✅ search state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t("home"), path: "/" },
    { name: t("shop"), path: "/shop" },
    { name: t("contact"), path: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "bn", label: "বাংলা" },
    { code: "hi", label: "हिन्दी" },
  ];

  // ✅ search submit function
  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-sky-600 shadow-lg" : "bg-sky-500"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3 text-white">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          🌱 GreenGrow BD
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <motion.li key={link.path} whileHover={{ scale: 1.1 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "hover:text-yellow-300 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}

          {/* ✅ Search */}
          <motion.li whileFocus={{ scale: 1.02 }}>
            <motion.input
              type="text"
              placeholder={t("search")}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-3 py-2 rounded-md outline-none border-2 border-gray-300 focus:border-green-500 transition-colors duration-300"
            />
          </motion.li>

          {/* Cart */}
          <motion.li
            className="text-xl cursor-pointer"
            onClick={() => navigate("/cart")}
            whileHover={{ scale: 1.2 }}
          >
            🛒
          </motion.li>

          {/* Login */}
          <motion.li whileHover={{ scale: 1.05 }}>
            <Login />
          </motion.li>

          {/* Language Dropdown */}
          <li className="relative">
            <motion.button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
            >
              🌐 {i18n.language.toUpperCase()}
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-1 bg-white text-black rounded-md shadow-md min-w-[120px] overflow-hidden"
                >
                  {languages.map((lng) => (
                    <li
                      key={lng.code}
                      onClick={() => {
                        i18n.changeLanguage(lng.code);
                        setLangOpen(false);
                      }}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                        i18n.language === lng.code ? "bg-gray-100" : ""
                      }`}
                    >
                      {lng.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <div className="text-xl cursor-pointer" onClick={() => navigate("/cart")}>
            🛒
          </div>
          <div className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-sky-400 text-white flex flex-col gap-3 px-5 py-4 shadow-md"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-bold"
                      : "hover:text-yellow-300 transition-colors"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <motion.li>
              <motion.input
                type="text"
                placeholder={t("search")}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="px-3 py-2 rounded-md w-full outline-none border-1 border-gray-300 focus:border-green-500 transition-colors duration-300"
              />
            </motion.li>

            <motion.li>
              <Login />
            </motion.li>

            <li className="relative">
              <motion.button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-md shadow hover:scale-105 transition-transform duration-200 w-full justify-center"
                whileHover={{ scale: 1.05 }}
              >
                🌐 {i18n.language.toUpperCase()}
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 bg-white text-black rounded-md shadow-md w-full overflow-hidden"
                  >
                    {languages.map((lng) => (
                      <li
                        key={lng.code}
                        onClick={() => {
                          i18n.changeLanguage(lng.code);
                          setLangOpen(false);
                          setMenuOpen(false);
                        }}
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                          i18n.language === lng.code ? "bg-gray-100" : ""
                        }`}
                      >
                        {lng.label}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
