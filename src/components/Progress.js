import React from 'react'
import StepSummary from './StepSummary'
import { connect } from 'react-redux'

const Progress = ({ activeId, height, length, width, quantity }) => {
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
                <StepSummary stepId={2} stepName="Cardboard Grade" isActive={activeId === 2}>-</StepSummary>
                <StepSummary stepId={3} stepName="Print Quality" isActive={activeId === 3}>-</StepSummary>
                <StepSummary stepId={4} stepName="Optional Extras" isActive={activeId === 4}>-</StepSummary>
                <li>
                    <a href="#total-cost" className="step step-total-cost">
                        <h3 className="step-total-cost-heading">Total Cost</h3>
                        <div className="step-total-cost-value">$0.00</div>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default connect(
    state => ({
        activeId: state.currentStep,
        height: state.dimensions.length,
        length: state.dimensions.length,
        width: state.dimensions.width,
        quantity: state.quantity.amount,
    }),
)(Progress)