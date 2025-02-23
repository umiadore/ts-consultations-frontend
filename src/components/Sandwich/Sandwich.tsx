import { useState } from "react";
import style from "./Sandwich.module.css";


export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Бутербродный конфигуратор: ");


  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese🧀`);
  }
  function handleAddSalami(): void {
    setSandwich(`${sandwich} Salami🍗`);
  }
  function handleAddSalat(): void {
    setSandwich(`${sandwich} Salat🥦`);
  }
  function handleClear(): void {
    setSandwich("Бутербродный конфигуратор: ");
  }

  return (
    <div>
      <h2>Sandwich</h2>
      <img
        className={style.image}
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddBread}>
          Add Bread
        </button>
        <button type="button" className={style.btn} onClick={handleAddCheese}>
          Add Cheese
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalami}>
          Add Salami
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalat}>
          Add Salat
        </button>
        <button type="button" className={style.btn} onClick={handleClear}>
          ВСЕ СЪЕСТЬ
        </button>
      </div>
      
    
    </div>
  );
}