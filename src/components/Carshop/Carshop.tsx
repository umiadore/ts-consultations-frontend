import Car from "../Car/Car";
import folgore from "../Carshop/img/Folgore.jpg"

export default function Carshop(): JSX.Element{

    return(
        <div>
            <h1>Car shop</h1>
            <h2>Cars</h2>
            <Car brand="mercedes" color="green" />
            <Car brand="Tesla" color="blue" />
            <Car brand="Opel" color="yellow" />
            <Car brand="Lada" color="red" />
            <Car brand="Audi" color="black" />
            <h1>Первый способ подгрузить изображение через импорт</h1>
            <img src={folgore} alt="" />
            <h1>Второй способ из папки public, без точки перед слеш</h1>
            <img src="folgore1.jpg.webp" alt="" />

        </div>
    )
}
