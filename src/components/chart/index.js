import React, { useState } from "react";

export default function Chart({ children, config, resize }) {
  const { height, width } = { ...config };
  //   const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <section className="chart" style={{ height, width }}>
      <section className="chart-header-container">
        <span>{config.title}</span>
        <span className="options-container"></span>
      </section>
      {children}
    </section>
  );
}
