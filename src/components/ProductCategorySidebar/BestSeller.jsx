"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BestSellerData } from "../../constants"

import styles from './ProductCategorySidebar.module.css';
// import { prod1 } from "../../assets";

export default function BestSeller() {
  return (
    <>
      <div className={styles.productShowcase}>
        <h3 className={styles.showcaseHeading}>best sellers</h3>

        <div className={styles.showcaseWrapper}>
          <div className={styles.showcaseContainer}>
            {BestSellerData.map((item, index) => (
            <div className={styles.showcase} key={index} id={item.id}>
              <Link href="#" className={styles.showcaseImgBox}>
                <Image
                  src={item.bestSellerImg}
                  alt={item.bestSellerImgAlt}
                  width="75"
                  height="75"
                  className={styles.showcaseImg}
                />
              </Link>

              <div className={styles.showcaseContent}>
                <Link href="#">
                  <h4 className={styles.showcaseTitle}>{item.bestSellerTitle}</h4>
                </Link>

                <div className={styles.showcaseRating}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div className={styles.priceBox}>
                  <del>${item.bestSellerOldPrice}</del>
                  <p className={styles.price}>${item.bestSellerSellingPrice}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

