import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Hero from "./components/Hero";
import './assets/style.css';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;