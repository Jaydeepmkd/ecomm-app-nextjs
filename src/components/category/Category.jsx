"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './Category.module.css';

export default function Category() {
  return (
    <>
      <div className={styles.category}>
        <div className={styles.container}>
          <div className={[styles.categoryItemContainer, styles.hasScrollbar].join(' ')}>
            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/dress.svg"
                  alt="dress & frock"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryTtemTitle}>Dress & frock</h3>

                  <p className={styles.categoryItemAmount}>(53)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/coat.svg"
                  alt="winter wear"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentflex}>
                  <h3 className={styles.categoryItemTitle}>Winter wear</h3>

                  <p className={styles.categoryItemAmount}>(58)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/glasses.svg"
                  alt="glasses & lens"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemIitle}>Glasses & lens</h3>

                  <p className={styles.categoryItemAmount}>(68)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/shorts.svg"
                  alt="shorts & jeans"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>Shorts & jeans</h3>

                  <p className={styles.categoryItemAmount}>(84)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/tee.svg"
                  alt="t-shirts"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>T-shirts</h3>

                  <p className={styles.categoryItemAmount}>(35)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/jacket.svg"
                  alt="jacket"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>Jacket</h3>

                  <p className={styles.categoryItemAmount}>(16)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/watch.svg"
                  alt="watch"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>Watch</h3>

                  <p className={styles.categoryItemAmount}>(27)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryImgBox}>
                <Image
                  src="/images/icons/hat.svg"
                  alt="hat & caps"
                  width="30" height="100"
                />
              </div>

              <div className={styles.categoryContentBox}>
                <div className={styles.categoryContentFlex}>
                  <h3 className={styles.categoryItemTitle}>Hat & caps</h3>

                  <p className={styles.categoryItemAmount}>(39)</p>
                </div>

                <Link href="#" className={styles.categoryBtn}>Show all</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

