

const Button = ({click, value}) => {
    return(
        <>
            <button onClick={click}>{value}</button>
        </>
    )
}

export default Button;