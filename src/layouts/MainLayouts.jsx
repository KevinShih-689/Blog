import { Outlet, useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import HomeIcon from "@components/icons/HomeIcon/HomeIcon"
import DesktopMenu from "./components/DesktopMenu/DesktopMenu"
import MobileMenu from "./components/MobileMenu/MobileMenu"
import "./MainLayouts.scss"

const MainLayouts = () => {
    const navigate = useNavigate();
    const isDeskTopScreen = useMediaQuery({
        query: '(min-width: 768px)'
    })
    console.log(isDeskTopScreen);
    
    return (
        <div className="main-layout">
            <div className="header">
                <div className="home-icon">
                    <HomeIcon width="35px" height="35px" className="icon" onClick={() => navigate("/")}/>
                </div>
                <div className="bar">
                    {
                        isDeskTopScreen?
                        <DesktopMenu />
                        :
                        <MobileMenu />
                    }
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayouts