import React from "react"
import { connect } from "react-redux"
import { addExtras } from "../actions"

const Quantity = ({ addExtras, cardboard, selectedExtras }) => {
    return (
        <ol className="btn-radios-list">
            <li>
                <label>
                    <input
                        type="checkbox"
                        name="optional-extras"
                        checked={selectedExtras.includes("handles")}
                        onChange={(e) => addExtras(e.target.value)}
                        value="handles"
                    />
                    <span className="btn btn-radio">
                        Handles<br />$0.10 per box
                    </span>
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="checkbox"
                        name="optional-extras"
                        disabled={cardboard !== "A"}
                        checked={selectedExtras.includes("reinforced-bottom")}
                        onChange={(e) => addExtras(e.target.value)}
                        value="reinforced-bottom"
                    />
                    <span className="btn btn-radio">
                        Reinforced bottom<br />$0.05 per box<br />
                        <small>(only available with grade A cardboard)</small>
                    </span>
                </label>
            </li>
        </ol>
    )
}

export default connect(
    state => ({
        cardboard: state.cardboard,
        selectedExtras: state.selectedExtras,
    }),
    { addExtras }
)(Quantity)