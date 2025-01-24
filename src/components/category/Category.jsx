"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Category.module.css";
import { ProductCategoryBelowBannerImage } from "../../constants";

export default function Category() {
  return (
    <>
      <div className={styles.category}>
        <div className={styles.container}>
          <div
            className={[styles.categoryItemContainer, styles.hasScrollbar].join(
              " "
            )}
          >
            {ProductCategoryBelowBannerImage.map((item, index) => (
              
              <div className={styles.categoryItem} key={index} id={item.id}>
                <div className={styles.categoryImgBox}>
                  <Image
                    src={item.categoryImageSrc}
                    alt="Product Category Image "
                    width="30"
                    height="100"
                  />
                </div>

                <div className={styles.categoryContentBox}>
                  <div className={styles.categoryContentFlex}>
                    <h3 className={styles.categoryItemTitle}>
                      {item.categoryItemTitle}
                    </h3>

                    <p className={styles.categoryItemAmount}>
                      {item.categoryItemAmount}
                    </p>
                  </div>

                  <Link href="#" className={styles.categoryBtn}>
                    Show all
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
