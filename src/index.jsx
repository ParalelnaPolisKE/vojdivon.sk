import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";

import { shuffle } from "./utils";

const logo = new URL("./logo.png", import.meta.url);

const polisList = [
  {
    name: "Praha",
    url: "https://www.paralelnipolis.cz/",
    motto: "vejdi ven",
  },
  {
    name: "Bratislava",
    url: "https://paralelnapolis.sk/",
    motto: "vojdi von",
  },
  {
    name: "Košice",
    url: "https://www.paralelnapoliskosice.sk/",
    motto: "vojdi von",
  },
  {
    name: "Wien",
    url: "https://www.parallele.at/",
    motto: "Tritt ein in das Aussen",
  },
  {
    name: "Decentruck",
    url: "https://www.paralelnipolis.cz/koncepty/decentruck/",
    motto: "opt-out",
  },
  {
    name: "BORDEL Hackerspace",
    url: "https://paralelnapolis.sk/svet",
    motto: "God bless this mess!",
  },
];

const App = () => {
  const [result, dencrypt] = useDencrypt();
  const [title, setTitle] = useState();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(shuffle(polisList));
    handleChangePolis("vojdi von");
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleChangePolis = (motto) => {
    dencrypt(motto);
    setTitle(motto);
  };

  return (
    <>
      <main role="main" className="content">
        <h1 className="title">{result}</h1>
        <ul className="polis-list">
          {places.map((polis) => (
            <li key={polis.name} className="polis-list__item">
              <a
                href={polis.url}
                className="polis-list__city"
                onFocus={() => handleChangePolis(polis.motto)}
                onMouseEnter={() => handleChangePolis(polis.motto)}
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

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
