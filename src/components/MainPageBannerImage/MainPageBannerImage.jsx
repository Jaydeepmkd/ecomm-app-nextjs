import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainPageBannerImage.module.css";

export default function MainPageBannerImage() {
  return (
    <>
      {/* <main> */}

      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={[styles.sliderContainer, styles.hasScrollbar].join(' ')}>
            <div className={styles.sliderItem}>
              <Image
                src="/images/banner-1.jpg"
                alt="women's latest fashion sale"
                className={styles.bannerImg}
                width={1000}
                height={1000}
              />

              <div className={styles.bannerContent}>
                <p className={styles.bannerSubtitle}>Trending item</p>

                <h2 className={styles.bannerTitle}>
                  Women's latest fashion sale
                </h2>

                <p className={styles.bannerText}>
                  starting at &dollar; <b>20</b>.00
                </p>

                <Link href="#" className={styles.banner_btn}>
                  Shop now
                </Link>
              </div>
            </div>

            <div className={styles.sliderItem}>
              <Image
                src="/images/banner-2.jpg"
                alt="modern sunglasses"
                className={styles.bannerImg}
                width={100}
                height={100}
              />

              <div className={styles.bannerContent}>
                <p className={styles.bannerSubtitle}>Trending accessories</p>

                <h2 className={styles.bannerTitle}>Modern sunglasses</h2>

                <p className={styles.bannerText}>
                  starting at &dollar; <b>15</b>.00
                </p>

                <Link href="#" className={styles.banner_btn}>
                  Shop now
                </Link>
              </div>
            </div>

            <div className={styles.sliderItem}>
              <Image
                src="/images/banner-3.jpg"
                alt="new fashion summer sale"
                className={styles.bannerImg}
                width={100}
                height={100}
              />

              <div className={styles.bannerContent}>
                <p className={styles.bannerSubtitle}>Sale Offer</p>

                <h2 className={styles.bannerTitle}>New fashion summer sale</h2>

                <p className={styles.bannerText}>
                  starting at &dollar; <b>29</b>.99
                </p>

                <Link href="#" className={styles.banner_btn}>
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
