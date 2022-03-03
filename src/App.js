
import "./App.css";
import Header from "./components/Header";

//  import FilesViewer from "./components/FilesViewer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <SideBar />
        {/* <FilesViewer /> */}
      </div>
    </div>
  );
}

export default App;

