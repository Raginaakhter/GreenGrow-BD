import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { useParams } from "react-router-dom";

export default function Shop() {
  const { categoryId } = useParams(); // URL থেকে category id পাওয়া
  const { i18n, t } = useTranslation();
  const [trees, setTrees] = useState([]);
  const lang = i18n.language;

useEffect(() => {
  fetch("/trees.json")
    .then(res => res.json())
    .then(data => {
      if (categoryId) {
      const filtered = data.filter(item => item.category === categoryId);

        setTrees(filtered);
      } else {
        setTrees(data);
      }
    });
}, [categoryId]);

  return (
    <div className="px-4 md:px-8">
      {/* Marquee just below Navbar */}
      <div className="mt-18 mb-8 flex justify-center">
        <div className="w-full md:w-full bg-gradient-to-r from-green-200 to-green-100 py-3 rounded shadow-lg overflow-hidden">
          <Marquee speed={50} gradient={false} className="text-lg font-semibold text-green-900 text-center">
            {t('marquee_text')}
          </Marquee>
        </div>
      </div>

      {/* Trees Grid */}
      {trees.length === 0 ? (
        <p className="text-center text-gray-500">
          {lang === "bn"
            ? "এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।"
            : lang === "hi"
            ? "इस श्रेणी में कोई उत्पाद नहीं मिला।"
            : "No products found in this category."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {trees.map(item => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 relative overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name[lang]}
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-1">{item.name[lang]}</h2>
                <p className="text-gray-600 text-sm mb-2">{item.description[lang]}</p>
                <p className="text-green-600 font-semibold mb-1">৳ {item.price}</p>
                <p className="italic text-xs text-gray-500">{item.benefits[lang]}</p>
              </div>

              {/* Cart Button */}
              <button className="absolute bottom-3 right-3 bg-green-500 text-white px-4 py-1 rounded-full shadow hover:bg-green-600 transition font-medium text-sm">
                {t('Add_to_cart') || "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
