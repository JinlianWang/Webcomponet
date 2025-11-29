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

function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOffset = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDayOffset; i += 1) cells.push(null);
  for (let day = 1; day <= totalDays; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  const monthLabel = today.toLocaleString("default", { month: "long" });

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "320px" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>
        {monthLabel} {year}
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            {dayLabels.map((label) => (
              <th key={label} style={{ padding: "0.25rem", fontSize: "0.85rem" }}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={`week-${index}`}>
              {week.map((day, dayIndex) => (
                <td
                  key={`day-${dayIndex}`}
                  style={{
                    padding: "0.5rem 0",
                    border: "1px solid #dedede",
                    backgroundColor: day === today.getDate() ? "#f0f8ff" : "transparent",
                    color: day ? "inherit" : "#ccc",
                  }}
                >
                  {day || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HelloWorld() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ marginTop: 0 }}>Hello from React!</p>
      <Calendar />
    </div>
  );
}

customElements.define("hello-react", HelloWorldElement);
