import DataList from "./DataList";

function App() {
  /*My goal is to display an unordered list with list items within it. The content of eaxg list item should contain two spans, one with the nameand the other with the age passed to the datalist function. The span element should be seperated by a single space. */
  let data = [
    { name: "recep", age: 23 },
    { name: "semih", age: 23 },
  ];
  return <DataList data = {data} />
}

export default App;
