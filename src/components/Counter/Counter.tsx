import { useState } from "react";
import style from './Counter.module.css'

export default function  Counter(): JSX.Element{
    const [counter,setCouter] = useState<number>(0);

    function handleMinus(): void{
        setCouter(counter -1);
    }

    function handlePlus(): void{
        setCouter(counter +1);
    }

    return (
<><h1>Добавление денег</h1><img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={`${style.container} ${style.counterClass}`}>
            <button className={style.btn} type="button" onClick={handleMinus}>Убрать лишние деньги</button>
            <span style={{ color: 'red' }}>{counter}</span>
            <button className={style.btn} type="button" onClick={handlePlus}>Добавить деньги на счет</button>
        </div>
        </>


    )


}

