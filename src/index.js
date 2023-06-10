import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Card from "./components/cards/Card.jsx";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Card />
	</React.StrictMode>
);
