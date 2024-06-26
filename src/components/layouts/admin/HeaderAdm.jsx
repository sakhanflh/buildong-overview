import { RiMenu2Fill } from "react-icons/ri";
import { GoBell } from "react-icons/go";

export function HeaderAdmin({toggleSidebar}) {
    
    return (
        <>
            <header className="w-full z-50 bg-white fixed items-center justify-between p-[5%] h-16 flex xl:hidden shadow-lg">
                <RiMenu2Fill className="text-2xl" onClick={toggleSidebar}/>
                    <h1 className="font-jost text-xl font-medium">BUILDONG</h1>
                <GoBell className="text-2xl"/>
            </header>
        </>
    )
}