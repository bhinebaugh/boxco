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
    {amount: 0},
    {
        [changeQuantity]: (state, action) => { state.amount = action.payload }
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