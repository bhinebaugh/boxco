import React from 'react'
import { connect } from 'react-redux'
import { calculatePrice } from '../selectors'
import StepSummary from './StepSummary'

const Progress = ({ activeId, height, length, width, quantity, cardboard, printQuality, selectedExtras, price }) => {
    return (
        <aside>
            <ul className="progress">
                <StepSummary stepId={1} stepName="Dimensions &amp; Quantity" isActive={activeId === 1}>
                        <dl>
                            <dt>Width:</dt>
                            <dd>{width}m</dd>
                            <dt>Height:</dt>
                            <dd>{height}m</dd>
                            <dt>Length:</dt>
                            <dd>{length}m</dd>
                            <dt>Quantity:</dt>
                            <dd>{quantity}</dd>
                        </dl>
                </StepSummary>
                <StepSummary stepId={2} stepName="Cardboard Grade" isActive={activeId === 2}>{cardboard || "-"}</StepSummary>
                <StepSummary stepId={3} stepName="Print Quality" isActive={activeId === 3}>{printQuality || "-"}</StepSummary>
                <StepSummary stepId={4} stepName="Optional Extras" isActive={activeId === 4}>{selectedExtras.join(", ") || "-"}</StepSummary>
                <li>
                    <a href="#total-cost" className="step step-total-cost">
                        <h3 className="step-total-cost-heading">Total Cost</h3>
                        <div className="step-total-cost-value">${price}</div>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default connect(
    state => ({
        activeId: state.currentStep,
        height: state.dimensions.height,
        length: state.dimensions.length,
        width: state.dimensions.width,
        quantity: state.quantity.amount,
        cardboard: state.cardboard,
        printQuality: state.printQuality,
        selectedExtras: state.selectedExtras,
        price: calculatePrice(state)
    }),
)(Progress)