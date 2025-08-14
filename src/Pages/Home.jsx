import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import treeImg from "../assets/tree_image.jpg";
import tree_image from "../assets/tree_image.jpg"

import Category from "../components/category";
import HomeSection from "./HomeSection";

export default function Hero() {
    const { t } = useTranslation();

    return (
<div>
            <div
            className="relative hero min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${tree_image})` }}
        >
            {/* Dark overlay for readability */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 lg:px-24">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
                >
                    {t("greeting") || "স্বাগতম আমাদের গাছের জগতে"}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl"
                >
                    {t("hero_desc") || "Protect our planet — Plant more trees today!"}
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    href="#"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-200"
                >
                    {t("hero_btn") || "Learn More"}
                </motion.a>
            </div>
        </div>
        <div>
            <Category></Category>
        </div>
        <div>
            <HomeSection></HomeSection>
        </div>
</div>
    );
}
