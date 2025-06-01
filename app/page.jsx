import Navbar from "./components/Navbar";
import RoomButton from "./components/RoomButton";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="bg-white container mx-auto">
      <Navbar/>
      <RoomButton/>
      <Search/>
    </div>
  );
}
