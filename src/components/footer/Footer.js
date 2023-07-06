import React from "react";
// , { useState }
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import StractLogo from "../../images/stractInfoLogo.png";
import appStoreIcon from "../../images/appStoreIcon.png";
import googlePlayStoreIcon from "../../images/googlePlayStoreIcon.png";
// import facebookIcon from "../../images/facebookIcon.png";
// import instagramIcon from "../../images/instgramIcon.png";
// import linkedinIcon from "../../images/linkedinIcon.png";

export default function Footer() {
  // const [selectedFooterItem, setSelectedFooterItem] = useState("Home");
  const navigate = useNavigate();
  function handleSelectionItem(selected) {
    // setSelectedFooterItem(selected);
    // if (selected === "Home") {
    // navigate("/Home");
    // } else if (selected === "Policy") {
    // navigate("/PrivacyPolicy");
    window.location.replace("https://stract.lirten.com/terms");
    // }
  }
  return (
    <div className={styles.footer}>
      {/* logos and app store icons */}
      <div
        onClick={async () => {
          navigate("/Home");
        }}
        className={styles.logoAndStores}
      >
        <div className={styles.navbarLogo}>
          <img src={StractLogo} width={160} alt="stract logo" />
        </div>

        <div className={styles.storesIcons}>
          <img
            className={styles.download}
            src={googlePlayStoreIcon}
            alt="Google Play Store"
          />
          <img className={styles.download} src={appStoreIcon} alt="App Store" />
        </div>
      </div>
      {/* footer selection  */}
      <div className={styles.rightReserved}>
        <h4 className={styles.footerSingleItemSelected}>
          Lirten all rights reserved &copy;2023
        </h4>
        <h4
          onClick={() => handleSelectionItem("Policy")}
          className={styles.termsStyle}
        >
          Terms & Conditions
        </h4>
      </div>
    </div>
  );
}
