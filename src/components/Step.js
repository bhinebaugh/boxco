import React from 'react'
import FormActions from './FormActions'

const Step = ({children, isDisabled, stepId, title}) => {
    let divId=`step-${stepId}`
    let buttonText = (stepId === 4) ? "Finish" : "Next"
    return(
        <div id={divId} className="content-step">
            <h2>Step {stepId} - {title}</h2>

            {children}

            <FormActions
                buttonText={buttonText}
                hideBackButton={stepId > 1 ? false : true}
                isDisabled={isDisabled}
            />
        </div>
    )
}

export default Step