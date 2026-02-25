import Menu from "./Menu"
function App() {


  return (
    <>
      <div className="d-flex bg-white vh-100">
        <div className="w-20"><Menu /></div>
        <div className="w-50  bg-primary">feed</div>
        <div className="w-30">suggestions</div>
      </div>
    </>
  )
}

export default App
