import React, { Component } from "react";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        /* fetch("http://localhost:8000/site/1", {
      method: "GET",
      headers: {
        "Authorization": "Token 94afa9a8b0804e65a53d335dec230478f69b39c5"
      }
    }).then(response => console.log(response)); */
        return (
            <div>
                <Navigation />
                <HeroSection />
                <SectionHeader
                    sectionId="services-section-head"
                    title="SERVICES"
                    description="Below are the services I provide. I cater to all budgets and needs. My goal is to make the web and mobile ecosystem more useful and visually appealing."
                />
                <ServicesSection />
                <SectionHeader
                    sectionId="portfolio-section-head"
                    title="PORTFOLIO"
                    description="Below you will find some of the projects I was involved in. I never undertake a project I don't believe in. In every project listed, I took the time to make sure that the user experience is at it's best. I grow with each project."
                />
                <PortfolioSection />
                <Footer />
            </div>
        );
    }
}

export default App;
