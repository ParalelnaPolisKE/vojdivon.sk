import React, { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";

import { shuffle } from "./utils";
import logo from "./logo.png";

const polisList = [
  {
    name: "Praha",
    url: "https://www.paralelnipolis.cz/",
    motto: "vejdi ven"
  },
  {
    name: "Bratislava",
    url: "https://paralelnapolis.sk/",
    motto: "vojdi von"
  },
  {
    name: "Košice",
    url: "https://www.paralelnapoliskosice.sk/",
    motto: "vojdi von"
  },
  {
    name: "Wien",
    url: "https://www.parallele.at/pa",
    motto: "Tritt ein in das Aussen"
  },
  {
    name: "Barcelona",
    url: "https://polisparallela.cat/",
    motto: "entra afuera"
  },

  {
    name: "Decentruck",
    url: "https://www.paralelnipolis.cz/koncepty/decentruck/",
    motto: "opt-out"
  }
];

export const App = () => {
  const { result: title, dencrypt } = useDencrypt();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(shuffle(polisList));
    dencrypt("vojdi von");
  }, []);

  return (
    <>
      <main role="main" className="content">
        <h1 className="title">{title}</h1>
        <ul className="polis-list">
          {places.map(polis => (
            <li key={polis.name} className="polis-list__item">
              <a
                href={polis.url}
                className="polis-list__city"
                onMouseEnter={() => dencrypt(polis.motto)}
              >
                {polis.name}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <img className="logo" src={logo} alt="logo Paralená Polis" />
      </footer>
    </>
  );
};
