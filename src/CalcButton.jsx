export default function CalcButton(props) {
    return (
        <button 
            className={`calcButton ${props.type}`} 
            onClick={() => {
                    return props.inputValue(props.data)
                }
            }
        >
            {props.display}
        </button>
    )
}