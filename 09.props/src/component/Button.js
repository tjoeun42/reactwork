import './Button.css';

const Button = ({text, color, a, b, c}) => {
    return (
        <>
            <button className="btn" style={{backgroundColor : color[0]}}>{text}버튼</button>
            <button className="btn" style={{backgroundColor : color[1]}}>{a}버튼</button>
            <button className="btn" style={{backgroundColor : color[2]}}>{b}버튼</button>
            <button className="btn" style={{backgroundColor : color[3]}}>{c}버튼</button>
        </>
    ) 
}
export default Button;