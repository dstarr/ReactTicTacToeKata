import { Outlet, Link } from "react-router-dom";

export default function App(props) {
    return (
        <>
            <div>
                <h1>App.js</h1>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/tictactoe">TicTacToe</Link> |{" "}
                    <Link to="/invoices">Invoices</Link> |{" "}
                    <Link to="/about">About</Link>
                </nav>
                <Outlet />
            </div>        
        </>
    );
}