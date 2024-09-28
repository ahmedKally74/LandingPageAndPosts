import logo from './logo.svg';
import '../src/styles/global.css'
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts/Posts';


function App() {
  return (
    <>
   
      <BrowserRouter>
     <Routes>
        <Route exact  path="/" element={    <LandingPage />} />
        <Route exact  path="/posts" element={ <Posts />} />
    </Routes>
    </BrowserRouter>
      
         {/* <UserList /> */}
    </>
  );
}

export default App;
