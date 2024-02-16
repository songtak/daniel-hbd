import React, { useState, useEffect } from "react";
import _ from "lodash";
import "../src/assets/styles/main.css";

function App() {
  return (
    <div className="wrapper">
      <div className="main_wrapper">
        <div className="animated-title">
          <div className="track">
            <div className="content blink">
              섹/시/가/이/대/니/얼/이/태/원/항/시/대/기
              섹/시/가/이/대/니/얼/이/태/원/항/시/대/기
            </div>
          </div>
        </div>
        <div className="images">
          <img src="../public/images/photo_001.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default App;
