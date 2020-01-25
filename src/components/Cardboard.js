import React from "react"
import { connect } from "react-redux"
import { changeCardboardGrade } from "../actions"

const Cardboard = ({ changeCardboardGrade, grade }) => {
    const handleChange = event => {
        console.log(event.target.value,"selected")
        changeCardboardGrade(event.target.value)
    }
    return (
        <ol className="btn-radios-list">
            <li>
                <label>
                    <input type="radio" name="cardboard-grade" value="A" checked={grade == "A"} onChange={handleChange} />
                    <span className="btn btn-radio">
                        A Grade<br />$0.20 m<sup>2</sup>
                    </span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="cardboard-grade" value="B" checked={grade == "B"} onChange={handleChange} />
                    <span className="btn btn-radio">
                        B Grade<br />$0.10 m<sup>2</sup>
                    </span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="cardboard-grade" value="C" checked={grade == "C"} onChange={handleChange} />
                    <span className="btn btn-radio">
                        C Grade<br />$0.05 m<sup>2</sup>
                    </span>
                </label>
            </li>
        </ol>
    )
}

export default connect(
    state => ({ grade: state.cardboard }),
    { changeCardboardGrade }
)(Cardboard)