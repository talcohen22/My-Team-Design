import { Link } from "react-router-dom";


export function AppHeader() {
    return (
        <header className="main-header">
            <div className="header-navigate">
                <Link className="logo" to="/">myteam</Link>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link>
            </div>
            <Link className="contact" to="/contact">contact us</Link>
        </header>
    )
}