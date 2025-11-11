import { useState } from "react";
import "./Editor.css";
const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    return (
        <div className="editor">
            <input onChange={(e)=> { setContent(e.target.value)}} placeholder="새로운 Todo..." />
            <button onClick={() => {onCreate(content)}}>추가</button>
        </div>
    )
}
export default Editor;