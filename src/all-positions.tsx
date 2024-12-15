import { useState } from "react";

export default function AllPositions() {
  const [elements, setElements] = useState([
    { id: "first", zIndexed: false },
    { id: "second", zIndexed: false },
    { id: "third", zIndexed: false },
    { id: "fourth", zIndexed: false },
  ]);
  const handleZIndexChange = (id: string) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, zIndexed: !el.zIndexed } : el
      )
    );
  };

  return (
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
              <h2>{element.id}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
