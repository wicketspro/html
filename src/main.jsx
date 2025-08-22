import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Check if we're in a browser environment
if (typeof window !== "undefined") {
  const rootElement = document.getElementById("root")
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error("Root element not found")
  }
}
