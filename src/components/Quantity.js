import React from "react"
import { connect } from "react-redux"
import { changeQuantity } from "../actions"

const Quantity = ({ changeQuantity, quantity }) => {
    return (
        <div className="form-row">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" id="quantity" onChange={(e) => changeQuantity(Number.parseInt(e.target.value))} value={quantity} min="0" step="1" />
        </div>        
    )
}

export default connect(
    state => ({ quantity: state.quantity.amount }),
    { changeQuantity }
)(Quantity)