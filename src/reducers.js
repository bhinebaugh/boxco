import { createReducer } from "@reduxjs/toolkit"
import {
    nextStep,
    previousStep,
    addExtras,
    changeCardboardGrade,
    changePrintQuality,
    changeHeight,
    changeLength,
    changeWidth,
    changeQuantity,
} from "./actions"

export const currentStep = createReducer(
    1,
    {
        [nextStep]: state => state+1,
        [previousStep]: state => state-1,
    }
)
export const dimensions = createReducer(
    {height:0, length:0, width: 0},
    {
        [changeHeight]: (state, action) => { state.height = action.payload },
        [changeLength]: (state, action) => { state.length = action.payload },
        [changeWidth]: (state, action) => { state.width = action.payload },
    }
)
export const quantity = createReducer(
    0,
    {
        [changeQuantity]: (state, action) => action.payload
    }
)
export const cardboard = createReducer(
    null,
    {
        [changeCardboardGrade]: (state, action) => action.payload
    }
)
export const printQuality = createReducer(
    null,
    {
        [changePrintQuality]: (state, action) => action.payload
    }
)
export const selectedExtras = createReducer(
    [],
    {
        [addExtras]: (state, action) => {
            if (state.includes(action.payload)) {
                return state.filter(v => v !== action.payload)
            } else {
                state.push(action.payload)
            }
        }
    }
)