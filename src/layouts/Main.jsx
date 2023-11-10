// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
// helper imports
import { fetchData } from "../helpers";
// asset imports
import wave from '../assets/wave.svg';
// component imports
import Nav from "../components/Nav";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className='layout'>
      <Nav userName={userName}/>
      <main>
        <Outlet />
      </main>
    <img src={wave} alt="" />
    </div>
  );
};

export default Main;
