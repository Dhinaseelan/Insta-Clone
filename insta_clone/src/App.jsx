import Menu from "./Menu";
import Feed from "./assets/Feed";
import Sug from "./assets/Sug";
function App() {
  return (
    <>
      <div className="d-flex bg-white vh-100">
        <div className="w-20">
          <Menu />
        </div>
        <div className="w-50  ">
          <Feed />
        </div>
        <div className="w-30">
          <Sug />
        </div>
      </div>
    </>
  );
}

export default App;
