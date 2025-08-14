import { useTranslation } from 'react-i18next'  
import './App.css'

import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation(); 

  return (
    <div className='container'>
     <LanguageSelector></LanguageSelector>
      <h2>{t("greeting")}</h2> 
    </div>
  );
}

export default App;

