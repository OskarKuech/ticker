import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameOverview from "./GameOverview";

const requireComponent = (require as any).context("./ticker_games", true, /\.tsx$/);

function App() {
  const routes = requireComponent.keys().map((filePath: string) => {
    const Component = requireComponent(filePath).default;
    const path = filePath
      .replace('./', '')
      .replace('.tsx', '')

    return <Route key={path} path={`/${path}`} element={<Component />} />;
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameOverview />} />
        {routes}
      </Routes>
    </Router>
  );
}

export default App;
