import React, { useState } from "react";
import { menuSections } from "../Data/MenuList";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {menuSections.map((section) => (
        <div className="sections" key={section.title}>
          <h2 className="menuTitle">{section.title}</h2>
          <div>
            {section.items.map((item) => (
              <ul
                className="lista"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <li className="vimsta">
                  <div className="titlePrice">
                    <h3 className="productName">{item.title}</h3>
                    <p>Price: {item.price} KM</p>
                  </div>
                  <ul className="ingredients">
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
      {selectedItem && (
        <div className="overlay">
          <div className="productInfo">
            <button className="closeButton" onClick={handleCloseClick}>
              X
            </button>
            <img src={selectedItem.imgUrl} alt={selectedItem.title} />
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
