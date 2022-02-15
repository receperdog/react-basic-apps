import Slides from "./components/Slides";
import './App.css';
const title = "Slideshow App";

function App(props) {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides slides={props.slides} />
      </div>
    </div>
  );
}
export default App;
