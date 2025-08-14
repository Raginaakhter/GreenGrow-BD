import React from "react";
import { useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-24 sm:py-32 mb-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            {t("")}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl lg:text-balance">
            {t("everything_you_need")}
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">{t("")}</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {/* Icon SVG */}
                </div>
                {t("push_to_deploy")}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{t("push_to_deploy_desc")}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {/* Icon SVG */}
                </div>
                {t("ssl_certificates")}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{t("ssl_certificates_desc")}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {/* Icon SVG */}
                </div>
                {t("simple_queues")}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{t("simple_queues_desc")}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  {/* Icon SVG */}
                </div>
                {t("advanced_security")}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{t("advanced_security_desc")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
