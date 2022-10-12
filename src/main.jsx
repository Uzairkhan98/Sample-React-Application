import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Topics from "./pages/topics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="topics" element={<Topics />} />
    </Routes>
  </HashRouter>
);
