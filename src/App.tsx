import React, { useState, useEffect } from "react";
import _ from "lodash";
import "../src/assets/styles/main.css";
import "../src/assets/styles/photo.css";

function App() {
  return (
    <div className="wrapper">
      <div className="main_wrapper">
        <div className="animated-title pd-tb40">
          <div className="track">
            <div className="content blink">
              섹/시/가/이/대/니/얼/이/태/원/항/시/대/기
              섹/시/가/이/대/니/얼/이/태/원/항/시/대/기
              섹/시/가/이/대/니/얼/이/태/원/항/시/대/기
            </div>
          </div>
        </div>
        <div className="layout">
          <div className="images_list">
            <div className="mb16">
              <a href="https://www.instagram.com/mamekikosuperhaduri98?igsh=bGRuZWtyYnluOTR4">
                https://www.instagram.com/mamekikosuperhaduri98?igsh=bGRuZWtyYnluOTR4
              </a>
            </div>
            <div className="photo_001 mb16" />
            <div style={{ fontSize: "24px" }} className="mb16">
              <div>이 름 : 윤수빈</div>
              <div>나 이 : 32세 (만 31세)</div>
              <div>주 소 : 보광로60길</div>
              <div>취 미 : 섹시한 여자 인스타 좋아요 누르기</div>
              <div>특 징 : 오늘 생일</div>
              <div
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/mamekikosuperhaduri98?igsh=bGRuZWtyYnluOTR4";
                }}
              >
                @mamekikosuperhaduri98
              </div>
            </div>
            <div className="photo_002 mb16" />
            <div className="photo_003 mb16" />
            <div className="photo_004 mb16" />
            <div className="photo_005 mb16" />
            <div className="photo_006 mb16" />
            <div className="photo_007 mb16" />
            <div className="photo_008 mb16" />
            <div className="photo_009 mb16" />
            <div className="photo_010 mb16" />
            <div className="photo_011 mb16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
