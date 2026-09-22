function Header() {
    return (
        <header className="header">
            <div>
                <h1>Zendy</h1>
                <span>Personal AI Companion</span>
            </div>

            <div className="status">
                <span className="status-dot"></span>
                Online
            </div>
        </header>
    );
}

export default Header;