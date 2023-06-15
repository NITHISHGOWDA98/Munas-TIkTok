
import './App.css';
import { GymWear } from './GymWear/GymWear';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <MainPage/>} />
          <Route exact path="/gymwear" element={ <GymWear/>} />
          {/* <Route path="/auth" element={<Auth />} />
          <Route element={<TechStack />}>
            <Route path="/codebank" element={<CodeBank />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/code" element={<Compiler />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
