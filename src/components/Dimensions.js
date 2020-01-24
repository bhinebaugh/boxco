import React from 'react'
import { connect } from 'react-redux'
import { changeHeight, changeLength, changeWidth } from '../actions'

const Dimensions = ({changeHeight, changeLength, changeWidth, height, length, width}) => {
    return(
        <>
        <div className="form-row">
            <label htmlFor="width">Width:</label>
            <input type="number" name="width" id="width" onChange={(e) => changeWidth(e.target.value)} value={width} min="0" step="0.01" />
        </div>

        <div className="form-row">
            <label htmlFor="height">Height:</label>
            <input type="number" name="height" id="height" onChange={(e) => changeHeight(e.target.value)} value={height} min="0" step="0.01" />
        </div>

        <div className="form-row">
            <label htmlFor="length">Length:</label>
            <input type="number" name="length" id="length" onChange={(e) => changeLength(e.target.value)} value={length} min="0" step="0.01" />
        </div>
        </>
    )
}

export default connect(
    state => {
        let { height, length, width } = state.dimensions
        return {
            height,
            length,
            width,
        }
    },
    {
        changeHeight,
        changeLength,
        changeWidth,
    }
)(Dimensions)