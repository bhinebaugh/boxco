import React from 'react';

const TotalCost = (props) => {
    return (
        <div id="total-cost" className="content-step">
            <h2>Total Cost</h2>
            <dl className="breakdown">
                <dt>Dimensions &amp; Quantity:</dt>
                <dd>3 &times; 10(W)&times;15.5(H)&times;13.24(L)</dd>
                <dt>Cardboard Grade:</dt>
                <dd>A grade</dd>
                <dt>Print Quality:</dt>
                <dd>3 colours</dd>
                <dt>Optional Extras:</dt>
                <dd>
                    <ol>
                        <li>Handles</li>
                        <li>Reinforce bottoms</li>
                    </ol>
                </dd>
                <dt>Total Cost:</dt>
                <dd>$0.00</dd>
            </dl>
        </div>
    )
}

export default TotalCost