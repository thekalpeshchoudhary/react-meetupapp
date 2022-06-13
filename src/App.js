import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favourites from "./pages/Favourites";
import MainNav from "./components/layouts/MainNav";

function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
        <Route path="/" element={<AllMeetups />}/>
        <Route path="/NewMeetups" element={<NewMeetups />}/>
        <Route path="/Favourites" element={<Favourites />}/>
      </Routes>
    </div>
  );
}

export default App;
