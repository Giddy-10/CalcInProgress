import calcButtonsData from './data.js'
import CalcButton from './CalcButton.jsx'

export default function Calculator(props) {

    const buttonElements = calcButtonsData.map(button => {
        return <CalcButton
            key={button.id}
            data={button.data}
            display={button.display}
            type={button.type}
            inputValue={props.inputValue}
        />
    });
    return (
        <div className="calcContainer">
            <div className="calcDisplay">{props.expressionInput.join}</div>
            <div className='calcButtonContainer'>
                {buttonElements}
            </div>
        </div>
    )
}
