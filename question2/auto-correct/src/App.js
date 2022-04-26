import './App.css';
import CorrectionDiv from './components/CorrectionDiv';
import AutocorrectTextarea from './components/AutocorrectTextarea';
import { ContextProvider } from './stateManage/AutoContext';


function App() {
  return (
    <ContextProvider>
      <div className="container">
        <CorrectionDiv/>
        <AutocorrectTextarea/>
      </div>
    </ContextProvider>

  );
}

export default App;
