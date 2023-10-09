import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {MainMenu} from "../../../../utils/consts.jsx";
import More from "./more/index.jsx";
import NewPost from "./newpost/index.jsx";

export default function Menu(){
    return(
        <div>
            <nav className="mt-0.5 mb-1">

            { MainMenu.map((menu, index) =>(
                <NavLink to={menu.path} className="block group">
                    {({isActive}) => (
                        <div className={classNames("p-3 inline-flex group-hover:bg-[#eff3f41a] transition-colors rounded-full" ,
                            { "font-bold" : isActive
                            })}>
                            <div className="h-[26.25] w-[26.25] relative">
                                {menu?.notifications && (
                                    <span className="w-[18px] h-[18px] bg-[#1D9BF9] rounded-full text-white border border-black absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] font-normal">
                                        {menu?.notifications}
                                    </span>
                                )}
                                {isActive && menu.icon.active}
                                {!isActive && menu.icon.passive}
                            </div>

                            <div className="text-[20px] mr-4 ml-5 h-6 leading-6">
                                {menu.title}
                            </div>
                        </div>
                    )}

                </NavLink>
                )
            )}

        <More/>

         </nav>
            <NewPost/>
        </div>

    )
}