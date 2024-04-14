interface Props{

}

function Navbar(){
    return (
        <ul className="nav nav-underline">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#bio">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    )
}

export default Navbar