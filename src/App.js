//Components
import Button from "./components/button/Button";

function App() {

    function successClick(){
        console.log("success")
        return 0
    }

  return (
    <div className="App">
        <Button label={"Success"} type={1} onClick={successClick}/>
    </div>
  );
}




export default App;
