import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'bn', lang: 'Bangla' },
    { code: 'hi', lang: 'Hindi' },
    { code: 'fr', lang: 'French' },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false); 
  };

  return (
    <>
      <style>{`
        .dropdown-wrapper {
          position: relative;
          display: inline-block;
          font-family: sans-serif;
        }
        .dropdown-btn {
          cursor: pointer;
          padding: 10px 16px;
          border: 1px solid #333;
          border-radius: 5px;
          background-color: #f0f0f0;
          user-select: none;
        }
        .dropdown-menu {
          position: absolute;
          top: 110%;
          left: 0;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          min-width: 150px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .dropdown-item {
          padding: 10px 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .dropdown-item:hover {
          background-color: #eee;
        }
        .dropdown-item.selected {
          font-weight: bold;
          background-color: #d1e7dd;
          color: #0f5132;
        }
      `}</style>

      <div className="dropdown-wrapper">
        <div
          className="dropdown-btn"
          tabIndex={0}
          role="button"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {/* Select Language ⬇️ */}
          <img className='' src="https://icons.veryicon.com/png/o/miscellaneous/generic-icon-3/language-empty.png" alt="" />
        </div>

        {open && (
          <ul className="dropdown-menu" role="listbox" tabIndex={-1}>
            {languages.map((lng) => (
              <li
                key={lng.code}
                role="option"
                aria-selected={i18n.language === lng.code}
                className={`dropdown-item ${
                  i18n.language === lng.code ? 'selected' : ''
                }`}
                onClick={() => changeLanguage(lng.code)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') changeLanguage(lng.code);
                }}
                tabIndex={0}
              >
                {lng.lang}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
