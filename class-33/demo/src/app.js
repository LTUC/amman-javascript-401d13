import LoginProvider from "./components/context";
import Login from './components/login';
import Auth from './components/auth';
export default function App(props) {
    return (
        <>
            <LoginProvider>
                {/* login component */}
                <Login />
                <Auth capability="read">
                    <div>
                        <h2>
                            List of items
                        </h2>
                        <ul>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>
                    </div>
                </Auth>
                <Auth capability="create">
                    <button>create</button>
                </Auth>
                <Auth capability="update">
                    <button>update</button>
                </Auth>
                <Auth capability="delete">
                    <button>delete</button>
                </Auth>
            </LoginProvider>
        </>
    )
}