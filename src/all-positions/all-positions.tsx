import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";
import { Header } from "../header";

export function AllPositions() {
  const [elements, setElements] = useState([
    { id: "first", zIndexed: false, route: AppRoute.Relative },
    { id: "second", zIndexed: false, route: AppRoute.Absolute },
    { id: "third", zIndexed: false, route: AppRoute.Fixed },
    { id: "fourth", zIndexed: false, route: AppRoute.Sticky },
  ]);
  const handleZIndexChange = (id: string) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, zIndexed: !el.zIndexed } : el
      )
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="items">
          <ul className="items__list">
            {elements.map((element) => (
              <li
                key={element.id}
                onClick={() => handleZIndexChange(element.id)}
                className={`items__list--item ${element.id} ${
                  element.zIndexed ? "zIndexed" : ""
                }`}
              >
                <Link to={element.route}>
                  <h2>{element.id}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
