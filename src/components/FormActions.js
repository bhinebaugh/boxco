import React from 'react'
import { connect } from 'react-redux'
import { nextStep, previousStep } from '../actions'

const FormActions = ({isDisabled, hideBackButton = false, buttonText = "Next", nextStep, previousStep}) => {
    return(
        <div className="form-actions">
            {!hideBackButton &&
                <button type="button" onClick={() => previousStep()} className="btn btn-back">
                    back
                </button>
            }
            <button type="button" onClick={() => nextStep()} className="btn btn-primary btn-next" disabled={isDisabled}>
                {buttonText}
            </button>
        </div>
    )
}

export default connect(
    null,
    { nextStep, previousStep }
)(FormActions)