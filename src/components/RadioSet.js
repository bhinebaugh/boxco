import React from "react"

const RadioSet = ({ handleChange, inputName = "cardboard-grade", options, selectedValue }) => {
    return (
        <ol className="btn-radios-list">
            {options.map( input => (
                <li key={input.value}>
                    <label>
                        <input type="radio" name={inputName} value={input.value} checked={selectedValue === input.value} onChange={() => handleChange(input.value)} />
                        <span className="btn btn-radio">
                            {input.name}<br />${input.cost} m<sup>2</sup>
                        </span>
                    </label>
                </li>
            ))}
        </ol>
    )
}

export default RadioSet