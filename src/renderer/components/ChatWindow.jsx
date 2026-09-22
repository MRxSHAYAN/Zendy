import Message from "./Message";

function ChatWindow() {
    return (
        <section className="chat-window">
            <Message
                sender="zendy"
                text="Hey! I'm Zendy. What are we working on?"
            />

            <Message
                sender="user"
                text="I want to build my AI assistant."
            />

            <Message
                sender="zendy"
                text="Then let's build it."
            />
        </section>
    );
}

export default ChatWindow;