import React from "react";
// , { useState }
import styles from "./Navbar.module.css";
import StractLogo from "../../images/stractInfoLogo.png";

import { useNavigate } from "react-router-dom";
export default function Navbar() {
  // const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const navigate = useNavigate();
  // function handleSelectionItem(selected) {
  //   setSelectedNavItem(selected);
  //   if (selected === "Home") {
  //     navigate("/Home");
  //   } else if (selected === "Policy") {
  //     navigate("/PrivacyPolicy");
  //     window.location.replace("http://127.0.0.1:5500/index.html");
  //   }
  // }
  return (
    <div className={styles.navbar}>
      <div
        onClick={async () => {
          navigate("/Home");
        }}
        className={styles.navbarLogo}
      >
        {/* <Link to={"/signIn"}> */}
        <img src={StractLogo} width={180} alt="stract logo" />
      </div>
      <div
        className={styles.navbarRightSide}
        // onClick={async () => {
        //   navigate("/signIn");
        // }}
      >
        {/* <div
          className={
            selectedNavItem === "Home"
              ? styles.navbarRightSideContainerSelected
              : styles.navbarRightSideContainer
          }
          onClick={() => handleSelectionItem("Home")}
        >
          <h4
            style={
              selectedNavItem === "Home"
                ? { fontWeight: 700 }
                : { fontWeight: 500 }
            }
            className={styles.navbarRightSideItem}
          >
            Home
          </h4>
        </div>

        <div
          className={
            selectedNavItem === "Policy"
              ? styles.navbarRightSideContainerSelected
              : styles.navbarRightSideContainer
          }
          onClick={() => handleSelectionItem("Policy")}
        >
          <h4
            style={
              selectedNavItem === "Policy"
                ? { fontWeight: 700 }
                : { fontWeight: 500 }
            }
            className={styles.navbarRightSideItem}
          >
            Privacy Policy
          </h4>
        </div>

        <div
          className={
            selectedNavItem === "Contact"
              ? styles.navbarRightSideContainerSelected
              : styles.navbarRightSideContainer
          }
          onClick={() => handleSelectionItem("Contact")}
        >
          <h4
            style={
              selectedNavItem === "Contact"
                ? { fontWeight: 700 }
                : { fontWeight: 500 }
            }
            className={styles.navbarRightSideItem}
          >
            Contact Us
          </h4>
        </div> */}
      </div>
    </div>
  );
}
