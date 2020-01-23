import React from 'react'

const FormActions = (props) => {
    // First step: no 'back'
    // <div className="form-actions">
    //     <button type="button" className="btn btn-primary btn-next" disabled>
    //         Next
    //     </button>
    // </div>
    // Final step: 'Finish' instead of 'Next'
    // <button type="button" className="btn btn-primary btn-next">
    //     Finish
    // </button>

    return(
        <div className="form-actions">
            <button type="button" className="btn btn-back">
                back
            </button>
            <button type="button" className="btn btn-primary btn-next" disabled>
                Next
            </button>
        </div>
    )
}

export default FormActions