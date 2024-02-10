"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './ProductCategorySidebar.module.css';

export default function ProductCategorySidebar() {
        useEffect(() => {
          const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
          const accordions = document.querySelectorAll('[data-accordion]');

          accordionBtns.forEach((accordionBtn, index) => {
            accordionBtn.addEventListener('click', function () {
              console.log("button has been clicked!!!");
      
              const clickedBtn = this.nextElementSibling.classList.contains(styles.sidebarAccordionMenu.active);
            //   console.log("clickedBtn : ",clickedBtn);
              accordions.forEach((accordion, i) => {
                if (index === i && !clickedBtn) {
                  accordion.classList.toggle(styles.sidebarAccordionMenu.active);
                  accordion.classList.toggle(styles.active);
                  
                //   classList.toggle([styles.addIcon,styles.removeIcon].join(' '));
                  accordionBtns[i].classList.toggle(styles.sidebarSubmenuCategoryList.active);
                } else {
                  accordion.classList.remove(styles.sidebarAccordionMenu.active);
                  accordionBtns[i].classList.remove(styles.sidebarSubmenuCategoryList.active);
                }
              });              
            });
          });
        }, []);
        


        const [isActive, setIsActive] = useState(false);

        const handleClick = () => {
            setIsActive(!isActive);
        };

        

  return (
    <>
        {/* <!--
          - SIDEBAR
          --> */}

          <div className={[styles.sidebar, styles.hasScrollbar].join(" ")} data-mobile-menu>
            <div className={styles.sidebarCategory}>
              <div className={styles.sidebarTop}>
                <h2 className={styles.sidebarTitle}>Category</h2>

                <button className={styles.sidebarCloseBtn} data-mobile-menu-close-btn>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <ul className={styles.sidebarMenuCategoryList}>
                <li className={styles.sidebarMenuCategory}>
                  <button  onClick={handleClick} className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/dress.svg"
                        alt="clothes"
                        width="20"
                        height="20"
                        className={styles.menuTitleImg}
                      />

                      <p className={styles.menuTitle}>Clothes</p>
                    </div>

                    <div>
                        {isActive ? (
                        <ion-icon name="remove-outline" className={styles.removeIcon}></ion-icon>
                         ) : (
                        <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                        )}
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Shirt</p>
                        <data value="300" className={styles.stock} title="Available Stock"
                          >300</data
                        >
                      </Link>
                    </li>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>shorts & jeans</p>
                        <data value="60" className={styles.stock} title="Available Stock"
                          >60</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>jacket</p>
                        <data value="50" className={styles.stock} title="Available Stock"
                          >50</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>dress & frock</p>
                        <data value="87" className={styles.stock} title="Available Stock"
                          >87</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/shoes.svg"
                        alt="footwear"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Footwear</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Sports</p>
                        <data value="45" className={styles.stock} title="Available Stock"
                          >45</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Formal</p>
                        <data value="75" className={styles.stock} title="Available Stock"
                          >75</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Casual</p>
                        <data value="35" className={styles.stock} title="Available Stock"
                          >35</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Safety Shoes</p>
                        <data value="26" className={styles.stock} title="Available Stock"
                          >26</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/jewelry.svg"
                        alt="clothes"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Jewelry</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Earrings</p>
                        <data value="46" className={styles.stock} title="Available Stock"
                          >46</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Couple Rings</p>
                        <data value="73" className={styles.stock} title="Available Stock"
                          >73</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Necklace</p>
                        <data value="61" className={styles.stock} title="Available Stock"
                          >61</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/perfume.svg"
                        alt="perfume"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Perfume</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Clothes Perfume</p>
                        <data value="12" className={styles.stock} title="Available Stock"
                          >12 pcs</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Deodorant</p>
                        <data value="60" className={styles.stock} title="Available Stock"
                          >60 pcs</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>jacket</p>
                        <data value="50" className={styles.stock} title="Available Stock"
                          >50 pcs</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>dress & frock</p>
                        <data value="87" className={styles.stock} title="Available Stock"
                          >87 pcs</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/cosmetics.svg"
                        alt="cosmetics"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Cosmetics</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Shampoo</p>
                        <data value="68" className={styles.stock} title="Available Stock"
                          >68</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Sunscreen</p>
                        <data value="46" className={styles.stock} title="Available Stock"
                          >46</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Body Wash</p>
                        <data value="79" className={styles.stock} title="Available Stock"
                          >79</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Makeup Kit</p>
                        <data value="23" className={styles.stock} title="Available Stock"
                          >23</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/glasses.svg"
                        alt="glasses"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Glasses</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Sunglasses</p>
                        <data value="50" className={styles.stock} title="Available Stock"
                          >50</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Lenses</p>
                        <data value="48" className={styles.stock} title="Available Stock"
                          >48</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.sidebarMenuCategory}>
                  <button className={styles.sidebarAccordionMenu} data-accordion-btn>
                    <div className={styles.menuTitleFlex}>
                      <Image
                        src="/images/icons/bag.svg"
                        alt="bags"
                        className={styles.menuTitleImg}
                        width="20"
                        height="20"
                      />

                      <p className={styles.menuTitle}>Bags</p>
                    </div>

                    <div>
                      <ion-icon name="add-outline" className={styles.addIcon}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={styles.removeIcon}
                      ></ion-icon>
                    </div>
                  </button>

                  <ul className={styles.sidebarSubmenuCategoryList} data-accordion>
                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Shopping Bag</p>
                        <data value="62" className={styles.stock} title="Available Stock"
                          >62</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Gym Backpack</p>
                        <data value="35" className={styles.stock} title="Available Stock"
                          >35</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Purse</p>
                        <data value="80" className={styles.stock} title="Available Stock"
                          >80</data
                        >
                      </Link>
                    </li>

                    <li className={styles.sidebarSubmenuCategory}>
                      <Link href="#" className={styles.sidebarSubmenuTitle}>
                        <p className={styles.sidebarproductName}>Wallet</p>
                        <data value="75" className={styles.stock} title="Available Stock"
                          >75</data
                        >
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className={styles.productShowcase}>
              <h3 className={styles.showcaseHeading}>best sellers</h3>

              <div className={styles.showcaseWrapper}>
                <div className={styles.showcaseContainer}>
                  <div className={styles.showcase}>
                    <Link href="#" className={styles.showcaseImgBox}>
                      <Image
                        src="/images/products/1.jpg"
                        alt="baby fabric shoes"
                        width="75"
                        height="75"
                        className={styles.showcaseImg}
                      />
                    </Link>

                    <div className={styles.showcaseContent}>
                      <Link href="#">
                        <h4 className={styles.showcaseTitle}>baby fabric shoes</h4>
                      </Link>

                      <div className={styles.showcaseRating}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className={styles.priceBox}>
                        <del>$5.00</del>
                        <p className={styles.price}>$4.00</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.showcase}>
                    <Link href="#" className={styles.showcaseImgBox}>
                      <Image
                        src="/images/products/2.jpg"
                        alt="men's hoodies t-shirt"
                        className={styles.showcaseImg}
                        width="75"
                        height="75"
                      />
                    </Link>

                    <div className={styles.showcaseContent}>
                      <Link href="#">
                        <h4 className={styles.showcaseTitle}>men's hoodies t-shirt</h4>
                      </Link>
                      <div className={styles.showcaseRating}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className={styles.priceBox}>
                        <del>$17.00</del>
                        <p className={styles.price}>$7.00</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.showcase}>
                    <Link href="#" className={styles.showcaseImgBox}>
                      <Image
                        src="/images/products/3.jpg"
                        alt="girls t-shirt"
                        className={styles.showcaseImg}
                        width="75"
                        height="75"
                      />
                    </Link>

                    <div className={styles.showcaseContent}>
                      <Link href="#">
                        <h4 className={styles.showcaseTitle}>girls t-shirt</h4>
                      </Link>
                      <div className={styles.showcaseRating}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className={styles.priceBox}>
                        <del>$5.00</del>
                        <p className={styles.price}>$3.00</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.showcase}>
                    <Link href="#" className={styles.showcaseImgBox}>
                      <Image
                        src="/images/products/4.jpg"
                        alt="woolen hat for men"
                        className={styles.showcaseImg}
                        width="75"
                        height="75"
                      />
                    </Link>

                    <div className={styles.showcaseContent}>
                      <Link href="#">
                        <h4 className={styles.showcaseTitle}>woolen hat for men</h4>
                      </Link>
                      <div className={styles.showcaseRating}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className={styles.priceBox}>
                        <del>$15.00</del>
                        <p className={styles.price}>$12.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </>
  )
};
