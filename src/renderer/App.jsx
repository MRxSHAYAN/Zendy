import Header from "./components/Header";
import ZendyAvatar from "./components/ZendyAvatar";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <ZendyAvatar />

                <ChatWindow />

                <InputBar />
            </main>
        </div>
    );
}

export default App;