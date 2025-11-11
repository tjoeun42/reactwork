import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>TODOLIST</h1>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}
export default Header;