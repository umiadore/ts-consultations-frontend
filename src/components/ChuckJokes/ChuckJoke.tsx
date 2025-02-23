import { useEffect, useState } from "react"

import style from "./chuck.module.css"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Joke {
id:string,
icon_url: string,
value: string
}

export default function ChuckJoke(): JSX.Element {

    // Мы говорим: "Сначала joke пустой (null), а потом он станет объектом Joke".
// Позволяет легко проверить, загружены ли данные
    const [joke, setJoke] = useState<Joke | null>(null);

async function loadAJoke ():Promise <void> {
    const res = await fetch ('https://api.chucknorris.io/jokes/random')
    const data = await res.json ();
    setJoke(data)
}
   useEffect (() => {
    loadAJoke();
}, []); // пустой массив зависимостей, чтобы запрос выполнялся один раз при монтировании

    return (
        <div>
        {joke ? (
          <>
            <img className={style.chuckIcon} src={joke.icon_url} alt="Joke icon" />
            <p className={style.text}>{joke.value}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

<button onClick={loadAJoke}>Get another Joke</button> {/* Кнопка для получения новой шутки */}
      </div>
  );
}
