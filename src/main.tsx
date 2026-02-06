import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div className="app-shell">
    <div className="app-container">
      <App />
    </div>
  </div>
);
