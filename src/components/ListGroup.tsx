import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook :- state hook
  const [selectIndex, setSelectIndex] = useState(-1);

  {
    /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item Found</p>
      </>
    );*/
  }

  const getMessage = () => {
    return items.length === 0 ? <p>No items Found</p> : null;
  };

  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {" "}
      {/*this is a shortcut to add the fragment */}
      <h1>{heading}</h1>
      {/*{items.length === 0 ? <p>No items Found</p> : null} the below is the shortest logic react developers use */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
        {/* braces are added because only jsx and html components are allowed */}
      </ul>
    </>
  );
}

export default ListGroup;
//props are input passes to a component
//state is the data managed by a component
//Props are immutable     states keep changing
//any changes made make changes in the DOM
