import React from "react";
import styles from "./Starter.module.css";

import gradientVector from "../../images/backgroundIamgeGradiant.png";
// import imagesDownload from "../../images/downloadIamges.png";
import appStoreIcon from "../../images/appStoreIcon.png";
import googlePlayStoreIcon from "../../images/googlePlayStoreIcon.png";

export default function Starter() {
  return (
    <div className={styles.starter}>
      <img
        className={styles.bgStarter}
        src={gradientVector}
        alt="backGroundImage"
      />
      <div className={styles.content}>
        <h1 className={styles.headingTitle}>New Experience</h1>
        <p className={styles.messageContent}>
          Stract is a Resource-Management Platform designed to enable human
          resources agility in a cost efficient way.
        </p>
        <div className={styles.storesIcons}>
          <img
            className={styles.download}
            src={googlePlayStoreIcon}
            alt="Google Play Store"
          />
          <img className={styles.download} src={appStoreIcon} alt="App Store" />
        </div>
      </div>
    </div>
  );
}
