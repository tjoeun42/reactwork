import { useState, useRef } from "react";
import "./Editor.css";
const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();
    return (
        <div className="editor">
            <input value={content} ref={contentRef} onChange={(e)=> { setContent(e.target.value)}} placeholder="새로운 Todo..." />
            <button onClick={() => {
                if(content === "") {
                    contentRef.current.focus();
                    return;
                }
                onCreate(content);
                setContent("");
            }}>추가</button>
        </div>
    )
}
export default Editor;