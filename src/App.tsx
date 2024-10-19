import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameOverview from './GameOverview';
import './styles/game.css';
import './styles/popup.css';

const requireComponent = (require as any).context('./ticker_games', true, /\.tsx$/);

function useScreenWidth() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1080);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

function App() {
    const isMobile = useScreenWidth();
    const [showPopup, setShowPopup] = useState(isMobile);

    useEffect(() => {
        setShowPopup(isMobile);
    }, [isMobile]);

    const routes = requireComponent.keys().map((filePath: string) => {
        const Component = requireComponent(filePath).default;
        const path = filePath.replace('./', '').replace('.tsx', '');
        return <Route key={path} path={`/${path}`} element={<Component />} />;
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<GameOverview />} />
                {routes}
            </Routes>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Diese Seite ist noch nicht für Mobilgeräte optimiert. Bitte in einem Desktop-Browser öffnen, damit alles korrekt angezeigt wird.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </Router>
    );
}

export default App;

/* Add to your CSS */
