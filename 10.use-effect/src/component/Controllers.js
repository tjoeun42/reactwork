const Controller = ({onClickBtn}) => {
    return (
        <>
            <button onClick={() => {onClickBtn(-1)}}>-1</button>&emsp;
            <button onClick={() => {onClickBtn(-10)}}>-10</button>&emsp;
            <button onClick={() => {onClickBtn(-100)}}>-100</button>&emsp;
            <button onClick={() => {onClickBtn(100)}}>+100</button>&emsp;
            <button onClick={() => {onClickBtn(10)}}>+10</button>&emsp;
            <button onClick={() => {onClickBtn(1)}}>+1</button>
        </>
    )
}

export default Controller;