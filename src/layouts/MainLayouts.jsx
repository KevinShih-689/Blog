import { Outlet } from "react-router-dom"
import "./MainLayouts.scss"
const MainLayouts = () => {
    return (
        <div className="main-layout">
            <div className="header">This</div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayouts