function Navbar() {
    return (
        <header className="navbar">
            <h2 className="logo">
                MiniHomeFinder
            </h2>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#Listings">Listings</a>
                <a href="#about">About</a>
            </nav>
        </header>
    );
}

export default Navbar;