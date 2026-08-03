import "./WriteArea.css";

const WriteArea = ({ handleChangeTextarea, text }) => {
    return (
        <textarea className="textarea"
            placeholder="Design the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly"
            onChange={handleChangeTextarea}
            value={text}
        />
    )
}

export { WriteArea }