"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MainModalPopups.module.css';

export default function MainModalPopups() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div className={styles.overlay} data-overlay></div>

          {/* MODAL */}
          <div className={styles.modal} data-modal>
            <div className={styles.modalCloseOverlay} data-modal-overlay onClick={closeModal}></div>
            <div className={styles.modalContent}>
              <button className={styles.modalCloseBtn} data-modal-close onClick={closeModal}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
              <div className={styles.newsletterImg}>
                <Image src="/images/newsletter.png" alt="subscribe newsletter" width="400" height="400" />
              </div>
              <div className={styles.newsletter}>
                <form action="#">
                  <div className={styles.newsletterHeader}>
                    <h3 className={styles.newsletterTitle}>Subscribe Newsletter.</h3>
                    <p className={styles.newsletterDesc}>
                      Subscribe to <b>Wolf</b> to get the latest product and discount updates.
                    </p>
                  </div>
                  <input type="email" name="email" className={styles.emailField} placeholder="Email Address" required />
                  <button type="submit" className={styles.btnNewsletter}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
