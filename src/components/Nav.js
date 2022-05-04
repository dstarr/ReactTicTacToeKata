import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div class="nav">
            <Link to="/">Home</Link> | 
            <Link to="/tictactoe">Tic Tac Toe</Link> | 
            <Link to="/about">About</Link>
        </div>
    );
}