import React from "react";
import { DesktopFooter } from "./DesktopFooter";
import LOGO from "LOGO.png";
import { NavbarLink } from "./NavbarLink";
import { TitleBig } from "./TitleBig";
import frame from "./frame.svg";
import rectangle69 from "./rectangle-69.svg";
import rectangle76 from "./rectangle-76.svg";
import "css/style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector from "./vector.svg";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="overlap-3">
          <div className="desktop-wrapper">
            {/* <DesktopFooter
              bottomSideInstagram="instagram-3.svg"
              bottomSideOzlabLogo="ozlab-logo-transparent-1-1-2.png"
              bottomSideShape="shape-3.svg"
              bottomSideShapeClassName="desktop-footer-v1"
              className="desktop-footer-v"
              img="line-11.svg"
              line="line-9.svg"
              line1="line-13.svg"
              line2="line-15.svg"
              overlapClassName="desktop-footer-v-instance"
              overlapClassNameOverride="desktop-footer-v1-instance"
              overlapGroupClassName="desktop-footer-instance"
              overlapGroupClassNameOverride="design-component-instance-node"
            /> */}
            <div className="overlap-4">
              <div className="wrapper">
                <div className="bg-wrapper">
                  <div className="bg-2" />
                </div>

                <div className="bg-3" />

                <div className="bg-4" />
              </div>

              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="rectangle-3" />

              <div className="rectangle-4" />

              <div className="internship">INTERNSHIP</div>

              <img className="frame" alt="Frame" src={frame} />
            </div>

            <div className="overlap-5">
              <TitleBig
                bg="bg-6.svg"
                className="title-big-v"
                img="bg-7.svg"
                overlapGroupClassName="title-big-v1"
                pattern="pattern-2.png"
              />
              <div className="nav-bar">
                <div className="button-sign-out">
                  <div className="sign-in-wrapper">
                    <div className="sign-in">SIGN IN</div>
                  </div>
                </div>

                <NavbarLink
                  className="navbar-link-instance"
                  menuLinkClassName="navbar-link-2"
                  text="KOR / ENG"
                />
                <NavbarLink
                  className="navbar-link-3"
                  menuLinkClassName="navbar-link-4"
                  text="구인 구직"
                />
                <NavbarLink
                  className="navbar-link-5"
                  menuLinkClassName="navbar-link-4"
                  text="소통창구"
                />
                <NavbarLink
                  className="navbar-link-6"
                  menuLinkClassName="navbar-link-7"
                  text="당근마켓"
                />
                <img className="LOGO" alt="Logo" src={LOGO} />
              </div>
            </div>
          </div>

          <div className="rectangle-5" />

          <div className="full-time">FULL TIME</div>

          <div className="community">COMMUNITY</div>

          <div className="part-time">PART TIME</div>

          <div className="text-wrapper-3">All</div>

          <div className="text-wrapper-4">West Lafayette</div>

          <div className="text-wrapper-5">Purdue</div>

          <div className="view">
            <div className="overlap-6">
              <img className="vector" alt="Vector" src={vector2} />

              <div className="rectangle-6" />

              <div className="text-wrapper-6">Tusnami</div>

              <div className="overlap-7">
                <div className="text-wrapper-7">Server for FRI,SAT, PM</div>

                <div className="text-wrapper-8">04:00PM - 08:00PM</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-9">식사 제공</div>
              </div>

              <div className="overlap-8">
                <div className="text-wrapper-10">경력 불필요</div>
              </div>

              <div className="overlap-9">
                <div className="text-wrapper-11">주말 오후</div>
              </div>

              <img className="vector-2" alt="Vector" src={vector} />

              <div className="overlap-group-3">
                <div className="text-wrapper-12">Details</div>
              </div>

              <img className="vector-3" alt="Vector" src={vector3} />

              <p className="p">700 Sagamore Pkwy N, Lafayette, IN 47904</p>

              <div className="text-wrapper-13">$12.88/HR</div>
            </div>
          </div>

          <div className="rectangle-7" />

          <div className="rectangle-8" />

          <div className="rectangle-9" />

          <div className="rectangle-10" />

          <div className="rectangle-11" />

          <div className="overlap-wrapper">
            <div className="overlap-10">
              <div className="overlap-11">
                <div className="text-wrapper-14">애누리 가능</div>
              </div>

              <div className="overlap-group-4">
                <div className="text-wrapper-15">픽업만</div>
              </div>

              <div className="rectangle-12" />

              <div className="overlap-12">
                <div className="text-wrapper-16">쿠쿠 밥솥 팝니다!</div>

                <img className="vector-4" alt="Vector" src={vector6} />
              </div>

              <div className="text-wrapper-17">
                귀국으로 인하여 급매 합니다!
              </div>

              <div className="overlap-13">
                <div className="text-wrapper-18">생활 가전</div>
              </div>

              <div className="overlap-14">
                <div className="text-wrapper-19">Details</div>
              </div>

              <img className="vector-5" alt="Vector" src={vector4} />

              <img className="vector-6" alt="Vector" src={vector5} />

              <p className="text-wrapper-20">
                700 Sagamore Pkwy N, Lafayette, IN 47904
              </p>

              <div className="text-wrapper-21">$1200</div>
            </div>
          </div>

          <div className="rectangle-13" />

          <div className="rectangle-14" />

          <div className="rectangle-15" />

          <div className="rectangle-16" />

          <div className="rectangle-17" />

          <div className="rectangle-18" />

          <div className="text-wrapper-22">아 집에 언제 가나요</div>

          <div className="text-wrapper-23">관세에 관하여...</div>
        </div>

        <img className="rectangle-19" alt="Rectangle" src={rectangle69} />

        <img className="rectangle-20" alt="Rectangle" src={rectangle76} />
      </div>
    </div>
  );
};