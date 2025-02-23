//Необходимо отрисовать ненумерованный список с лист-айтамами с контентом  внутри:
import { useEffect, useState } from "react";
import style from "./products.module.css";
import type Item from "./types/Product"
// https://fakestoreapi.com/products

//   {название продукта}
//   {картинка продукта}
//   {`${цена продукта} $`}


export default function Product(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState<Item[]>([]);

  async function loadItems(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setItems(data);
  }
  useEffect(() => {
    loadItems();
  }, []);
  return (
    <div>
        <h2 className={style.headerText}>Check the items on the list</h2>
      <ul className={style.productList}>
        {items.map((item) => (
          <li className={style.productCard}>
     <p className={style.title}>{item.title}</p>
            
              <img className={style.image} src={item.image} alt="" />
              <p className={style.price}>{`${item.price} $`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
