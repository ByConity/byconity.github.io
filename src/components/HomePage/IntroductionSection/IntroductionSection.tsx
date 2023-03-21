import React from "react";
import Translate from "@docusaurus/Translate";
import architectureImagePath from "./architecture.png";
import styles from "./IntroductionSection.module.scss";

function IntroductionSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.descriptionColumn}>
          <h2 className={styles.header}>
            <Translate id="homePage.introductionSection.title" />
          </h2>
          <p className={styles.introductionText}>
            <Translate id="homePage.introductionSection.description" />
          </p>
        </div>

        <div className={styles.imageColumn}>
          <img
            className={styles.architectureImage}
            src={architectureImagePath}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
