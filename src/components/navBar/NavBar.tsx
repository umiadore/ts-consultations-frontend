import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

export default function NavBar(): JSX.Element {
  // так как мы работаем в тайпскрипт, поэтому нужна типизация функции возвращаемого значения

  return <nav className={style.navigation}>
<ul className={style.list}>
    <li className={style.listelement}>
        <NavLink to='/productpage' className={style.link}>Product
        </NavLink>
    </li>
    <li className={style.listelement}>
        <NavLink to='/counter' className={style.link}> Counter
        </NavLink>
    </li>
    <li className={style.listelement}>
        <NavLink to='/userpage' className={style.link}>UserPage
        </NavLink>
    </li>
    <li className={style.listelement}>
        <NavLink to='/carshop' className={style.link}>Carshop
        </NavLink>
    </li>
    <li className={style.listelement}>
        <NavLink to='/chuckjokes' className={style.link}>ChuckJoke
        </NavLink>
    </li>
    <li className={style.listelement}>
        <NavLink to='/sandwich' className={style.link}>Sandwich
        </NavLink>
    </li>
</ul>
  </nav>;
}
