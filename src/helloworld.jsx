import React from "react";
import ReactDOM from "react-dom/client";

class HelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.root = this.attachShadow({ mode: "open" });

    const mountPoint = document.createElement("div");
    this.root.appendChild(mountPoint);

    this.reactRoot = ReactDOM.createRoot(mountPoint);
    this.reactRoot.render(<HelloWorld />);
  }

  disconnectedCallback() {
    if (this.reactRoot) this.reactRoot.unmount();
  }
}

function HelloWorld() {
  return <div style={{ fontFamily: "sans-serif" }}>Hello from React!</div>;
}

customElements.define("hello-react", HelloWorldElement);
