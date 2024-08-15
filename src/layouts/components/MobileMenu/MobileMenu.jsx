import { useState, memo } from "react"

import Burger from "@components/icons/Burger/Burger"
import "./MobileMenu.scss"

const MobileMenu = memo(({ headerHeight }) => {
    const [isToggleOn, setIsToggleOn] = useState(false)
    
    return (
        <div className="mobile-menu">
            <Burger onClick={() => setIsToggleOn(!isToggleOn)}/>
            {
                isToggleOn && <div className="menu">aaa</div>
            }
        </div>
    )
})

MobileMenu.displayName = "MobileMenu"

export default MobileMenu