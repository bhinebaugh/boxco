import React from 'react';
import { connect } from 'react-redux';
import { calculatePrice } from '../selectors';

const TotalCost = ({ quantity, dimensions, cardboard, printQuality, selectedExtras, price }) => {
    return (
        <div id="total-cost" className="content-step">
            <h2>Total Cost</h2>
            <dl className="breakdown">
                <dt>Dimensions &amp; Quantity:</dt>
                <dd>{quantity} &times; {dimensions.width}(W)&times;{dimensions.height}(H)&times;{dimensions.length}(L)</dd>
                <dt>Cardboard Grade:</dt>
                <dd>{cardboard}</dd>
                <dt>Print Quality:</dt>
                <dd>{printQuality}</dd>
                <dt>Optional Extras:</dt>
                <dd>
                    <ol>
                        {selectedExtras.map(option => <li key={option}>{option}</li>)}
                    </ol>
                </dd>
                <dt>Total Cost:</dt>
                <dd>${price.toFixed(2)}</dd>
            </dl>
        </div>
    )
}

export default connect(
    state => ({ ...state, price: calculatePrice(state) })
)(TotalCost)