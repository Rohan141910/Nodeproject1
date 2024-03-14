import { BrowserRouter,Route,Routes } from "react-router-dom"
import Getdata from "./Getdata"
import Postdata from "./Postdata"
import Deletedata from "./Deletedata"
import Putdata from "./Putdata"
import Header  from "./Header"
function Routing()
{
    return(
        <div>
            
            <BrowserRouter>
          <Header></Header>
            <Routes>
                <Route path="/" element={<Getdata></Getdata>}></Route>
                <Route path="/delete" element={<Deletedata></Deletedata>}></Route>
                <Route path="/post" element={<Postdata></Postdata>}></Route>
                <Route path="/put" element={<Putdata></Putdata>}></Route>
               
                
            </Routes>
                
                
                
                </BrowserRouter>
        </div>
    )
    }
    export default Routing