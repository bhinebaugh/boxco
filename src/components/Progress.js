import React from 'react'

const Progress = props => {
    return (
        <aside>
            <ul className="progress">
                <li>
                    <a href="#step-1" className="step step-1 is-active">
                        <div className="step-number">1</div>
                        <h3 className="step-heading">Dimensions &amp; Quantity</h3>
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
                    </a>
                </li>
                <li>
                    <a href="#step-2" className="step step-2">
                        <div className="step-number">2</div>
                        <h3 className="step-heading">Cardboard Grade</h3>
                        <span className="step-value">-</span>
                    </a>
                </li>
                <li>
                    <a href="#step-3" className="step step-3">
                        <div className="step-number">3</div>
                        <h3 className="step-heading">Print Quality</h3>
                        <span className="step-value">-</span>
                    </a>
                </li>
                <li>
                    <a href="#step-4" className="step step-4">
                        <div className="step-number">4</div>
                        <h3 className="step-heading">Optional Extras</h3>
                        <span className="step-value">-</span>
                    </a>
                </li>
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