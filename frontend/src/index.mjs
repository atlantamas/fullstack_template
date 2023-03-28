import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const element_id_root = document.getElementById("root")

const root = ReactDOM.createRoot(element_id_root)

const result_of_createElement = React.createElement(App)

root.render(result_of_createElement)