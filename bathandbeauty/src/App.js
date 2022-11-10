import './App.css';
import { AllRoutes } from './Component/AllRoutes/AllRoutes';
import {Navbar} from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
