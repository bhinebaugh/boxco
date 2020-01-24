import React from 'react'
import StepSummary from './StepSummary'

const Progress = props => {
    var activeId = 2
    return (
        <aside>
            <ul className="progress">
                <StepSummary stepId={1} stepName="Dimensions &amp; Quantity" isActive={true}>
                        <dl>
                            <dt>Width:</dt>
                            <dd>0.0m</dd>
                            <dt>Height:</dt>
                            <dd>0.0m</dd>
                            <dt>Length:</dt>
                            <dd>0.0m</dd>
                            <dt>Quantity:</dt>
                            <dd>0</dd>
                        </dl>
                </StepSummary>
                <StepSummary stepId={2} stepName="Cardboard Grade" isActive={false}>-</StepSummary>
                <StepSummary stepId={3} stepName="Print Quality" isActive={false}>-</StepSummary>
                <StepSummary stepId={4} stepName="Optional Extras" isActive={false}>-</StepSummary>
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

export default Progress