import React from "react";
import styles from "./SectionNewArrivalsBody.module.css";
import NewArr1 from "../../assets/NewArr1.jpeg";
import NewArr2 from "../../assets/NewArr2.jpg";
import NewArr3 from "../../assets/NewArr3.jpeg";
import NewArr4 from "../../assets/NewArr4.jpg";
import NewArr5 from "../../assets/NewArr5.jpg";
import NewArr6 from "../../assets/NewArr6.jpg";
import NewArr7 from "../../assets/NewArr7.jpg";
import NewArr8 from "../../assets/NewArr8.jpeg";

const newArrivals = [
  {
    id: 1,
    image: NewArr1,
    price: "xxx",
    productName: "Boss Jacket Black",
    productArticle: "Hugo Boss",
    category: "New",
  },
  {
    id: 2,
    image: NewArr2,
    price: "xxx",
    productName: "Tommy Upper Brown",
    productArticle: "Tommy Hilfiger",
    category: "New",
  },
  {
    id: 3,
    image: NewArr3,
    price: "xxx",
    productName: "Boss Air Jacket Black",
    productArticle: "Hugo Boss",
    category: "New",
  },
  {
    id: 4,
    image: NewArr4,
    price: "xxx",
    productName: "Puma Upper Black",
    productArticle: "Puma",
    category: "New",
  },
  {
    id: 5,
    image: NewArr5,
    price: "xxx",
    productName: "Puma Upper White",
    productArticle: "Puma",
    category: "New",
  },
  {
    id: 6,
    image: NewArr6,
    price: "xxx",
    productName: "Diesel Pant Light Brown",
    productArticle: "Diesel",
    category: "New",
  },
  {
    id: 7,
    image: NewArr7,
    price: "xxx",
    productName: "Diesel Pant Light Grey",
    productArticle: "Diesel",
    category: "New",
  },
  {
    id: 8,
    image: NewArr8,
    price: "xxx",
    productName: "Lauren Air Jacket Grey",
    productArticle: "Lauren",
    category: "New",
  },
];

const SectionNewArrivalsBody = () => {
  return (
    <div className={styles.section__new_arrivals_body_section} id="slider">
      {newArrivals.map((product) => {
        return (
          <div className={styles.new_arrivals_producs} key={product.id}>
            <img src={product.image} alt="" />
            <div className={styles.new_arrivals_product_details}>
              <h4>Rs. {product.price}</h4>
              <h4>{product.productName}</h4>
              <p>{product.productArticle}</p>
              <span>{product.category}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionNewArrivalsBody;
