import React from "react";
import styles from "./SectionHotProducts.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ImgTFSunGlass from "../../assets/HotProducts/ImgTFSunGlass.jpg";
import ImgBag from "../../assets/HotProducts/ImgBag.jpg";
import ImgJacket from "../../assets/HotProducts/ImgJacket.jpg";
import ImgPerfume from "../../assets/HotProducts/ImgPerfume.jpg";
import ImgWatch from "../../assets/HotProducts/ImgWatch.jpg";
import ImgSleeper from "../../assets/HotProducts/ImgSleeper.jpg";
import ImgLShoes from "../../assets/HotProducts/ImgLShoes.jpg";
import ImgCap from "../../assets/HotProducts/ImgCap.jpg";
import ImgShirt from "../../assets/HotProducts/ImgShirt.jpg";
import SecondaryCard from "../UI/SecondaryCard";

const hotProducts = [
  {
    id: 1,
    image: ImgTFSunGlass,
    name: "SunGlasses",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 2,
    image: ImgBag,
    name: "Bags",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 3,
    image: ImgJacket,
    name: "Jackets",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 4,
    image: ImgPerfume,
    name: "Perfumes",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 5,
    image: ImgSleeper,
    name: "Sleepers",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 6,
    image: ImgShirt,
    name: "Shirts",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 7,
    image: ImgWatch,
    name: "Watches",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 8,
    image: ImgCap,
    name: "Caps",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
  {
    id: 9,
    image: ImgLShoes,
    name: "Shoes",
    tagLine: "Be Supported. Be You.",
    summary: "Move Supported and free from directions",
  },
];

const SectionHotProducts = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider-hot");
    slider.scrollLeft = slider.scrollLeft - 800;
    console.log("btn Clicked");
  };

  const slideRight = () => {
    var slider = document.getElementById("slider-hot");
    slider.scrollLeft = slider.scrollLeft + 800;
  };

  return (
    <SecondaryCard className={styles.section__hot_products_section}>
      <div className={styles.section__hot_products_header}>
        <h2>WHAT'S HOT</h2>
        <div className={styles.section__hot_products_header_icons}>
          <FaArrowLeft
            onClick={slideLeft}
            className={styles.section__hot_products_header_icon}
          />
          <FaArrowRight
            onClick={slideRight}
            className={styles.section__hot_products_header_icon}
          />
        </div>
      </div>
      <div className={styles.section__hot_products_div} id="slider-hot">
        {hotProducts.map((product) => {
          return (
            <div className={styles.hot_products_producs} key={product.id}>
              <img src={product.image} alt="" />
              <div className={styles.hot_products_product_details}>
                <h3>{product.tagLine}</h3>
                <p>{product.summary}</p>
                <a href="/">Shop {product.name}</a>
              </div>
            </div>
          );
        })}
      </div>
      <FaArrowRight />
    </SecondaryCard>
  );
};

export default SectionHotProducts;
