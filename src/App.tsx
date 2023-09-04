//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  // let items = ["New Delhi", "Noida", "Bareilly", "Ahemdabad", "Patna"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
