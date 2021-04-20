import './App.css';
import { Buttons } from './Components/Buttons';
import { Footer } from './Components/Footer';
import { Tanks } from './Components/Tanks';
import { MainContextProvider } from './Context/MainContext';

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Tanks />
        <Buttons />
        <Footer />
      </MainContextProvider>
    </div>
  );
}

export default App;
