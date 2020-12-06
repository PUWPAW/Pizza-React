/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import classNames from "classnames";

const sortType = [
  {
    id: 0,
    type: "popular",
    text: "популярности",
  },
  {
    id: 1,
    type: "cost",
    text: "цене",
  },
  {
    id: 2,
    type: "alphabet",
    text: "алфавиту",
  },
];

const Sort = React.memo(function Sort() {
  const [activeSortType, setActiveSortType] = React.useState(0);
  const [viewItem, setViewItem] = React.useState(false);
  const sortRef = React.useRef();

  const activeSort =
    sortType.length === 0 ? "Нет данных" : sortType[activeSortType].text;

  const onSelectSortType = (index) => {
    setActiveSortType(index);
    setViewItem(!viewItem);
  };

  const openSortHandler = () => {
    setViewItem(!viewItem);
  };

  const outsideClikHandler = (event) => {
    //event.composedPath && event.composedPath() for Safari
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setViewItem(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", outsideClikHandler);
  }, []);

  return (
    <div
      ref={sortRef}
      className="sort"
      onClick={sortType.length === 0 ? null : openSortHandler}
    >
      <div className="sort__label">
        <svg
          className={classNames({ open: viewItem === false })}
          width="10"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeSort}</span>
      </div>
      <div className={classNames("sort__popup", { close: viewItem === false })}>
        <ul>
          {sortType &&
            sortType.map((sortItem, index) => {
              return (
                <li
                  key={sortItem.id}
                  className={classNames({ active: activeSortType === index })}
                  onClick={() => onSelectSortType(index)}
                >
                  {sortItem.text}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
});

export default Sort;
