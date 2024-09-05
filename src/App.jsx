import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Instruction from "./pages/instruction/Instruction";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/how",
      element : <Instruction></Instruction>
    }
  ]);


  return <>
    
    <div>
        {/* GLOBAL NAVIGATION */}
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
