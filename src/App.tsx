import NavBar from "./components/NavBar/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/containers/Home/Home.tsx";
import Features from "./components/containers/Features/Features.tsx";
import Pricing from "./components/containers/Pricing/Pricing.tsx";
import Portfolio from "./components/containers/Portfolio/Portfolio.tsx";


const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="container">
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/features" element={<Features />} />
                   <Route path="/pricing" element={<Pricing />} />
                   <Route path="/portfolio" element={<Portfolio />} />
               </Routes>
            </main>
        </>
    );
};

export default App;
