import React from "react";
import classNames from "classnames";

const types = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = React.memo(function Categories({ onClickItem }) {
  const [activeItem, setActivItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActivItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={classNames({ active: activeItem === null })}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {types.map((type, index) => {
          return (
            <li
              key={`${type}-${index}`}
              className={classNames({ active: activeItem === index })}
              onClick={() => onSelectItem(index)}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
