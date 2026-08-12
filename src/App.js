import React, { Suspense, lazy, useEffect } from "react";
/*
 * Poppins ships with the site rather than coming from Google's CDN. Two
 * reasons, and the first is the deciding one: requesting fonts from
 * fonts.gstatic.com hands every visitor's IP address to a third party before
 * they have agreed to anything, which German courts have held to be a GDPR
 * breach — and this site is aimed squarely at readers in Germany. Serving the
 * files ourselves also removes the last two third-party origins from the
 * critical path, where the browser previously had to fetch a stylesheet from
 * one host before it could even discover the font files on another.
 *
 * Latin and Latin Extended only, split by weight. Each @font-face carries a
 * unicode-range, so a visitor downloads a subset only if the page actually
 * uses a character from it.
 */
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-ext-400.css";
import "@fontsource/poppins/latin-ext-500.css";
import "@fontsource/poppins/latin-ext-600.css";
import "@fontsource/poppins/latin-ext-700.css";
import { Flip, ToastContainer } from "react-toastify";
/* Imported ahead of App.css so the toast overrides there win. Contact loads
   lazily, and a lazy chunk's stylesheet is injected after the main one. */
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import ScrollUp from "./components/scrollup/ScrollUp";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";

/*
 * Everything below the fold is split out, but the hero is not: it holds the h1
 * and the LCP image, and behind a lazy boundary neither can start until a
 * second round trip for its chunk has finished. It ships in the main bundle so
 * the largest paint is limited by the image alone.
 */
import Home from "./components/home/Home";

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
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        AOS.init({
            duration: 650,
            easing: "ease-in-out",
            once: true,
            mirror: false,
            disable: prefersReducedMotion,
        });
    }, []);

    return (
        <ErrorBoundary>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <Header />
            <main className="main" id="main-content">
                <Home />
                {/* The fallback sits under the hero rather than replacing the
                    whole page, so the first screen is never a spinner */}
                <Suspense
                    fallback={<LoadingSpinner message="Loading portfolio..." />}
                >
                    <About />
                    <Work />
                    <Achievements />
                    <Skills />
                    <Qualification />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
                <Footer />
            </Suspense>
            <ScrollUp />
            {/* At the root, outside every section that isolates its stacking
                context, so the toast is never painted under the header */}
            <ToastContainer
                position="top-center"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
            />
        </ErrorBoundary>
    );
}

export default App;
