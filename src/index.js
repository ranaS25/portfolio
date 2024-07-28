import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1", {}, "this is a div");

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(element);

const element = <div className="p-5 bg-red-400 text-center text-lg font-bold">hello</div>;

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(element);
