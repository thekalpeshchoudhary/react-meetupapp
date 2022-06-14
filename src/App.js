import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddNewMeetups from "./pages/AddNewMeetups";
import Favourites from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/AddNewMeetups" element={<AddNewMeetups />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
