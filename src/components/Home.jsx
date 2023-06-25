import { useGlobalContext } from "../context/context";
import { FaBars } from "react-icons/fa";
export const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};
