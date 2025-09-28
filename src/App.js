import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ScrollUp from "./components/scrollup/ScrollUp";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components for better performance and code splitting
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Achievements = lazy(() =>
    import("./components/achievements/Achievements")
);
const Skills = lazy(() => import("./components/skills/Skills"));
const Qualification = lazy(() =>
    import("./components/qualification/Qualification")
);
const Work = lazy(() => import("./components/work/Work"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
    return (
        <ErrorBoundary>
            <Header />
            <main className="main">
                <Suspense
                    fallback={<LoadingSpinner message="Loading portfolio..." />}
                >
                    <Home />
                    <About />
                    <Achievements />
                    <Skills />
                    <Qualification />
                    <Work />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
                <Footer />
            </Suspense>
            <ScrollUp />
        </ErrorBoundary>
    );
}

export default App;
