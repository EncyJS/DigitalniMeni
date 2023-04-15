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
        <div className="@apply max-w-[90vw] m-auto p-20" key={section.title}>
          <h2 className="@apply text-[2.5em] font-[900px] font-[Lobster] text-[#eee] mb-4 border-b-[#bbb] border-b border-solid">{section.title}</h2>
          <div>
            {section.items.map((item) => (
              <ul
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <li className="@apply w-full bg-[hsla(0,0%,74.5%,0.205)] rounded text-[#eee] cursor-pointer mb-4 p-4">
                  <div className="@apply flex justify-between text-2xl font-[450];">
                    <h3>{item.title}</h3>
                    <p>Price: {item.price} KM</p>
                  </div>
                  <ul className="@apply font-normal flex text-[0.9em] gap-[0.3rem] gap-[0.3rem]">
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
        <div className="@apply fixed z-[100] w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center left-0 top-0">
          <div className="@apply h-[40rem] w-[70rem] bg-white flex items-center p-5 rounded-[5px]">
            <button className="@apply bg-[#f44336] text-white cursor-pointer flex mt-5 px-5 py-2.5 rounded-[5px] border-[none] right-0" onClick={handleCloseClick}>
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
