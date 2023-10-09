import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar"

export default function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
        <Sidebar/>
        <main className="flex flex-1 justify-between">
            <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
                <Outlet/>
            </main>
            <RightBar/>
        </main>

    </div>
  );
}