import './App.css'
import LanguageSelector from './components/LanguageSelector/index.jsx';
import Routing from './components/router/index.jsx';
import { Toaster, } from 'react-hot-toast';

const App = () => {
  return (
    <div className='App'>
      <LanguageSelector />
      <Routing />
      <Toaster position='bottom-right' reverseOrder={false} />
    </div>
  );
};

export default App;