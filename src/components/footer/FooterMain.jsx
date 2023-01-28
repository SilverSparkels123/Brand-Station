import React from "react";
import styles from "./FooterMain.module.css";

const FooterMain = () => {
  return (
    <section className={styles.footer__main_section}>
      <ul className={styles.footer__main_section_links}>
        <h3>Products</h3>
        <li>
          <a href="/">Footwear</a>
        </li>
        <li>
          <a href="/">Clothing</a>
        </li>
        <li>
          <a href="/">Accessories</a>
        </li>
        <li>
          <a href="/">Outlet-Sale</a>
        </li>
        <li>
          <a href="/">New Arrivals</a>
        </li>
        <li>
          <a href="/">Special Offer</a>
        </li>
      </ul>
      <ul className={styles.footer__main_section_links}>
        <h3>Sports</h3>
        <li>
          <a href="/">Running</a>
        </li>
        <li>
          <a href="/">Football</a>
        </li>
        <li>
          <a href="/">Gym/ Training</a>
        </li>
        <li>
          <a href="/">Tennis</a>
        </li>
        <li>
          <a href="/">Outdoor</a>
        </li>
        <li>
          <a href="/">Basketball</a>
        </li>
        <li>
          <a href="/">Swimming</a>
        </li>
        <li>
          <a href="/">Proper Sports</a>
        </li>
      </ul>
      <ul className={styles.footer__main_section_links}>
        <h3>Collections</h3>
        <li>
          <a href="/">Clothing</a>
        </li>
        <li>
          <a href="/">Sunglasses</a>
        </li>
        <li>
          <a href="/">Perfumes</a>
        </li>
        <li>
          <a href="/">Imported Bags</a>
        </li>
        <li>
          <a href="/">Footwear</a>
        </li>
        <li>
          <a href="/">Imported Watches</a>
        </li>
      </ul>
      <ul className={styles.footer__main_section_links}>
        <h3>Support</h3>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <a href="/">Customer Services</a>
        </li>
        <li>
          <a href="/">Return & Exchanges</a>
        </li>
        <li>
          <a href="/">Order Tracking</a>
        </li>
        <li>
          <a href="/">Store Locator</a>
        </li>
        <li>
          <a href="/">Terms & Conditions</a>
        </li>
        <li>
          <a href="/">Conditions</a>
        </li>
      </ul>
      <ul className={styles.footer__main_section_links}>
        <h3>Company Info</h3>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Brand Station Stores</a>
        </li>
        <li>
          <a href="/">Our Apps</a>
        </li>
        <li>
          <a href="/">Entity Details</a>
        </li>
        <li>
          <a href="/">Carrers</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </section>
  );
};

export default FooterMain;
