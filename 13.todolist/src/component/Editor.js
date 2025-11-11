import "./Editor.css";
const Editor = ({onCreate}) => {
    return (
        <div className="editor">
            <input placeholder="새로운 Todo..." />
            <button>추가</button>
        </div>
    )
}
export default Editor;