import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Category = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language; 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/trees_category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.trees_category))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className=" mt-3">
      <h2 className="font-semibold text-xl mb-3 text-center  text-black bg-green-600 pl-30 pr-30 w-full">
        {lang === "bn"
          ? "সকল শ্রেণী"
          : lang === "hi"
          ? "सभी श्रेणियाँ"
          : "All Categories"} : {categories.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.category_id}
            className="card bg-base-100 shadow-sm"
          >
            <figure className="px-10 pt-10">
              <img
                src={category.image}
                alt={category.category_name[lang]}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.category_name[lang]}</h2>
              <p>
                {lang === "bn"
                  ? `এই ক্যাটাগরির পণ্য দেখুন।`
                  : lang === "hi"
                  ? `इस श्रेणी के उत्पाद देखें।`
                  : `Explore products under this category.`}
              </p>
              <div className="card-actions">
                <Link to={`/shop/${category.category_id}`}>
                  <button className="btn btn-success">
                    {lang === "bn"
                      ? "এখনই দেখুন"
                      : lang === "hi"
                      ? "अभी देखें"
                      : "View Now"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
