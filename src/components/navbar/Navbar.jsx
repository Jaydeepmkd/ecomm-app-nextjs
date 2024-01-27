/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react';
import Head from 'next/head';
import { Helmet } from 'react-helmet';

export default function Navbar() {
  // modal variables
  useEffect(()=>{
    const modal = document.querySelector('[data-modal]');
    const modalCloseBtn = document.querySelector('[data-modal-close]');
    const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

    // modal function
    const modalCloseFunc = function () { modal.classList.add('closed') }

    // modal eventListener
    if (modalCloseOverlay){
      modalCloseOverlay.addEventListener('click', modalCloseFunc);
      modalCloseBtn.addEventListener('click', modalCloseFunc);
    }

    // notification toast variables
    const notificationToast = document.querySelector('[data-toast]');
    const toastCloseBtn = document.querySelector('[data-toast-close]');

    // notification toast eventListener
    if(toastCloseBtn){
      toastCloseBtn.addEventListener('click', function () {
        notificationToast.classList.add('closed');
      });
    }
    
    // // mobile menu variables
    // const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    // const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    // const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
    // const overlay = document.querySelector('[data-overlay]');
    // if(mobileMenuOpenBtn){
    //   for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    //     // mobile menu function
    //     const mobileMenuCloseFunc = function () {
    //       mobileMenu[i].classList.remove('active');
    //       overlay.classList.remove('active');
    //     }
  
    //     mobileMenuOpenBtn[i].addEventListener('click', function () {
    //       mobileMenu[i].classList.add('active');
    //       overlay.classList.add('active');
    //     });
  
    //     mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    //     if(overlay){
    //       overlay.addEventListener('click', mobileMenuCloseFunc);
    //     }
  
    //   }
    // }
    





    // accordion variables
    const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
    const accordion = document.querySelectorAll('[data-accordion]');

    for (let i = 0; i < accordionBtn.length; i++) {

      accordionBtn[i].addEventListener('click', function () {

        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {

          if (clickedBtn) break;

          if (accordion[i].classList.contains('active')) {

            accordion[i].classList.remove('active');
            accordionBtn[i].classList.remove('active');

          }

        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

      });
    }
  },[]);

  return (
    <>
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" ></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Helmet>

    <header>

      <div className="header-top">

        <div className="container">

          <ul className="header-social-container">

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>

          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>

          <div className="header-top-actions">

            <select name="currency">

              <option value="usd">USD $</option>
              <option value="eur">EUR &euro;</option>

            </select>

            <select name="language">

              <option value="en-US">English</option>
              <option value="es-ES">Espa&ntilde;ol</option>
              <option value="fr">Fran&ccedil;ais</option>

            </select>

          </div>

        </div>

      </div>

      <div className="header-main">

        <div className="container">

          <Link href="#" className="header-logo">
            {/* <Image src="/images/logo/logo.svg" alt="Wolf's logo" width="120" height="36"/>/ */}
            <h1 style={{ fontSize: '30px' }}> <b>Wolf</b></h1>
          </Link>

          <div className="header-search-container">

            <input type="search" name="search" className="search-field" placeholder="Enter your product name..."/>

            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

          </div>

          <div className="header-user-actions">

            <button className="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">0</span>
            </button>

          </div>

        </div>

      </div>

      <nav className="desktop-navigation-menu">

        <div className="container">

          <ul className="desktop-menu-category-list">

            <li className="menu-category">
              <Link href="#" className="menu-title">Home</Link>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Categories</Link>

              <div className="dropdown-panel">

                <ul className="dropdown-panel-list">

                  <li className="menu-title">
                    <Link href="#">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Desktop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Laptop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Camera</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Tablet</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Headphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image src="/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                        height="119"/>
                    </Link>
                  </li>

                </ul>

                <ul className="dropdown-panel-list">

                  <li className="menu-title">
                    <Link href="#">Men's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Sports</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Jacket</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Sunglasses</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image src="/images/mens-banner.jpg" alt="men's fashion" width="250" height="119"/>
                    </Link>
                  </li>

                </ul>

                <ul className="dropdown-panel-list">

                  <li className="menu-title">
                    <Link href="#">Women's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Perfume</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Cosmetics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Bags</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image src="/images/womens-banner.jpg" alt="women's fashion" width="250" height="119"/>
                    </Link>
                  </li>

                </ul>

                <ul className="dropdown-panel-list">

                  <li className="menu-title">
                    <Link href="#">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Smart Watch</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Smart TV</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Keyboard</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Mouse</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Microphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image src="/images/electronics-banner-2.jpg" alt="mouse collection" width="250"
                        height="119"/>
                    </Link>
                  </li>

                </ul>

              </div>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Men's</Link>

              <ul className="dropdown-list">

                <li className="dropdown-item">
                  <Link href="#">Shirt</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Shorts & Jeans</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Safety Shoes</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Wallet</Link>
                </li>

              </ul>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Women's</Link>

              <ul className="dropdown-list">

                <li className="dropdown-item">
                  <Link href="#">Dress & Frock</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Makeup Kit</Link>
                </li>

              </ul>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Jewelry</Link>

              <ul className="dropdown-list">

                <li className="dropdown-item">
                  <Link href="#">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Couple Rings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Bracelets</Link>
                </li>

              </ul>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Perfume</Link>

              <ul className="dropdown-list">

                <li className="dropdown-item">
                  <Link href="#">Clothes Perfume</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Deodorant</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Flower Fragrance</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Air Freshener</Link>
                </li>

              </ul>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Blog</Link>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Hot Offers</Link>
            </li>

          </ul>

        </div>

      </nav>

      <div className="mobile-bottom-navigation">

        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>

      <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">

          <li className="menu-category">
            <Link href="#" className="menu-title">Home</Link>
          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Shirt</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Shorts & Jeans</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Safety Shoes</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Wallet</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Dress & Frock</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Earrings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Necklace</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Makeup Kit</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Earrings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Couple Rings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Necklace</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Bracelets</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Clothes Perfume</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Deodorant</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Flower Fragrance</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Air Freshener</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">
            <Link href="#" className="menu-title">Blog</Link>
          </li>

          <li className="menu-category">
            <Link href="#" className="menu-title">Hot Offers</Link>
          </li>

        </ul>

        <div className="menu-bottom">

          <ul className="menu-category-list">

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>

                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">English</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">Espa&ntilde;ol</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">Fren&ccedil;h</Link>
                </li>

              </ul>

            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">USD &dollar;</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">EUR &euro;</Link>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="menu-social-container">

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>

          </ul>

        </div>

      </nav>

    </header>
    </>
  )
}
