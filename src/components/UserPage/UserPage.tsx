// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Consultation 10
// Необходимо отрисовать ненумерованный список с лист-айтамами с контентом  внутри: Ник: {юзернейм}. Имя,фамилия: {имя} {фамилия}. Телефон: {номер}. E-mail: {почта}.
// Zip-code: {почтовый индекс}
// https://fakestoreapi.com/users

// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export default function UserPage(): JSX.Element {
  // создаем переменную состояния
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState<User[]>([]); // в useState мы должны указать юзер - массив
  // нужно создать функцию по загрузке
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const array = await res.json(); // таким образом мы конверстируем нашие данные из json в объект и это все будет лежать в нашем массиве array
    setUsers(array);
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li
            style={{
              border: "solid black 2px",
              margin: "10px",
              padding: "10 px",
            }}
            key={user.id}
          >
            <div>nickname: {user.username}</div>
            <div>email: {user.email}</div>
            <div> password: {user.password}</div>
            <div>
              name: {user.name.firstname}, {user.name.lastname}
            </div>
            <div>phone: {user.phone}</div>
            <div>
              address: {user.address.city}
              {user.address.city}, {user.address.number}, {user.address.zipcode}
              , {user.address.geolocation.lat},{user.address.geolocation.long}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
