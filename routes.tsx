import {HashRouter, Route, Routes} from "react-router-dom"
import {Home} from "./src/pages/Home";
import {Serviços} from "./src/pages/Serviços";


export function AppRoutes(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/serviços" element={<Serviços/>}/>
            </Routes>
        </HashRouter>
    )
}