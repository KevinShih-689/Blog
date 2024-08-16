import { useState } from "react"
import Burger from "@components/icons/Burger/Burger"
import ExpandLink from "@components/ExpandLink/ExpandLink"
import color from "@src/variables.module.scss"
import { menuItems } from "@lib/constants"
import "./MobileMenu.scss"


const MobileMenu = () => {
    const [isToggleOn, setIsToggleOn] = useState(false)
    const {GRAY_LIGHTEST, PRIMARY, SECONDARY} = color

    return (
      <div className="mobile-menu">
        <Burger onClick={() => setIsToggleOn(!isToggleOn)} />
        <div className={`menu ${isToggleOn && "menu-show"}`}>
          {menuItems.map(({ id, name, path }) => (
            <ExpandLink
              key={id}
              to={path}
              color={`${SECONDARY}`}
              activeColor={`${PRIMARY}`}
              activeBackgroundColor={`${GRAY_LIGHTEST}`}
            >
              {name}
            </ExpandLink>
          ))}
        </div>
      </div>
    );
}

MobileMenu.displayName = "MobileMenu"

export default MobileMenu