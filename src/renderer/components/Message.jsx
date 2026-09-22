function Message({ sender, text }) {
    return (
        <div className={`message ${sender}`}>
            <strong>
                {sender === "zendy" ? "Zendy" : "You"}
            </strong>

            <p>{text}</p>
        </div>
    );
}

export default Message;