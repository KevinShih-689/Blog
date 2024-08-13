import { useState } from "react"
import Burger from "@components/icons/Burger/Burger"
import "./MobileMenu.scss"

const MobileMenu = () => {

    const [isToggleOn, setIsToggleOn] = useState(false)

    return (
        <div className="mobile-menu">
            <Burger onClick={() => setIsToggleOn(!isToggleOn)}/>
            {
                isToggleOn && <div className="menu">aaa</div>
            }
        </div>
    )
}

export default MobileMenu