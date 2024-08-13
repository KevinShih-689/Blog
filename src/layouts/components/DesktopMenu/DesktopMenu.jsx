
import Divider from "@components/Divider/Divider"
import ExpandLink from "@components/ExpandLink/ExpandLink"
import "./DesktopMenu.scss"

const DesktopMenu = () => {
    return (
        <>
            <ExpandLink className="item" to={"/streaming"}>Streaming Video</ExpandLink>
            <Divider />
            <ExpandLink className="item" to={"/dashboard"}>Dashboard</ExpandLink>
            <Divider />
            <ExpandLink className="item" to={"/notify"}>Line Notify</ExpandLink>
        </>
    )
}

export default DesktopMenu