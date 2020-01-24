import React from 'react'

const Dimensions = props => {
    return(
        <>
        <div className="form-row">
            <label for="width">Width:</label>
            <input type="number" name="width" id="width" value="0" min="0" step="0.01" />
        </div>

        <div className="form-row">
            <label for="height">Height:</label>
            <input type="number" name="height" id="height" value="0" min="0" step="0.01" />
        </div>

        <div className="form-row">
            <label for="length">Length:</label>
            <input type="number" name="length" id="length" value="0" min="0" step="0.01" />
        </div>
        </>
    )
}

export default Dimensions