import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetUsersCard from "./pages/GetUsersCard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./components/UserInfo";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<GetUsersCard/>}/>
            <Route path="users/:id" element={<UserInfo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
