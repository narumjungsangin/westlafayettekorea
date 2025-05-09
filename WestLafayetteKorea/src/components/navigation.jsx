import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        {/* 왼쪽: 로고 */}
        <div className="navbar-header" style={{ flex: "0 0 auto" }}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="/img/logo.png"
              alt="West Lafayette Korea"
              style={{
                height: "60px",
                width: "auto",
                maxWidth: "240px",
                objectFit: "contain",
                display: "block",
                marginTop: "-12px", // 로고 하단 살짝 보정 (필요시 -2 ~ -5px 조절 가능)
              }}
            />
            {/* 메인 로고 타이틀 */}
          </a>
        </div>

        {/* 오른쪽: 내비게이션 메뉴 */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{ flex: "1", textAlign: "right" }}
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "inline-flex", gap: "20px", alignItems: "center", marginRight: "0" }}
          >
            <li>
              <a href="#features" className="page-scroll">
                당근마켓
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                소통창구
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                구인 구직
              </a>
            </li>
            <li>
              {/* <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
