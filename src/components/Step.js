import React from 'react'
import FormActions from './FormActions'

const Step = props => {
    let divId=`step-${props.stepId}`
    return(
        <div id={divId} className="content-step">
            <h2>Step {props.stepId} - {props.title}</h2>

            {props.children}

            <FormActions />
        </div>
    )
}

export default Step