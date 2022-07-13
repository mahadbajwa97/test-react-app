import "./App.css";
import Navbar from "./components/Navbar";
import TabView from "./components/TabView";
import CourseView from "./components/CourseView";
function App() {
  return (
    <div className="mx-auto h-full">
      <Navbar />
      <TabView />
      <CourseView />
    </div>
  );
}

export default App;
