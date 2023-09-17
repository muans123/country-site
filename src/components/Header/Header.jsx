import { Menu } from "./components/Menu"
import { DropMenu } from "./components/DropMenu"

import './style.sass'

export const Header = () => {
    return (
        <div className="header">
            <Menu />
            <DropMenu />
        </div>
    )
}