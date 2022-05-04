import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function App(props) {
    return (
        <>
            <Nav />
            <h1>App.js</h1>
            <p>This is the main App component.</p>
        </>
    );
}