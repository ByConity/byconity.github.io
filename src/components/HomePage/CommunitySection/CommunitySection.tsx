import React from "react";
import Translate from "@docusaurus/Translate";
import Section from "@site/src/components/Section";
import { RxOpenInNewWindow } from "react-icons/rx";

import BilibiliLogo from "./bilibili-logo.svg";
import GithubLogo from "./github-logo.svg";
import MeetupLogo from "./meetup-logo.svg";
import SlackLogo from "./slack-logo.svg";
import TwitterLogo from "./twitter-logo.svg";
import WechatLogo from "./wechat-logo.svg";
import wechatQrPath from "./wechat-qr.jpeg";

import styles from "./CommunitySection.module.scss";

type LogoDisplayProps = {
  image: React.ReactNode;
  externalLink?: string;
  hoverImageSrc?: string;
};

function LogoDisplay(props: LogoDisplayProps) {
  const { image, externalLink, hoverImageSrc } = props;

  return (
    <a href={externalLink} target="_blank" className={styles.logoDisplayLink}>
      <div className={styles.logoDisplay}>
        <div className={styles.imageContainer}>{image}</div>
        {hoverImageSrc && (
          <div className={styles.hoverImageContainer}>
            <img src={hoverImageSrc} />
          </div>
        )}
      </div>
    </a>
  );
}

function CommunitySection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        <Translate id="homePage.communitySection.title" />
      </h2>
      <div className={styles.logoGrid}>
        <LogoDisplay
          image={<GithubLogo />}
          externalLink="https://github.com/byconity"
        />

        <LogoDisplay image={<WechatLogo />} hoverImageSrc={wechatQrPath} />

        <LogoDisplay
          image={<BilibiliLogo />}
          externalLink="https://space.bilibili.com/2065226922?spm_id_from=333.1007.0.0"
        />

        <LogoDisplay image={<TwitterLogo />} />

        <LogoDisplay image={<SlackLogo />} />

        <LogoDisplay image={<MeetupLogo />} />
      </div>
    </div>
  );
}

export default CommunitySection;
