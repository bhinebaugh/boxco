import { createReducer } from "@reduxjs/toolkit"
import { nextStep, previousStep, changeHeight, changeLength, changeWidth } from "./actions"

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
        [changeHeight]: state => state.height = 1,
        [changeLength]: state => state.length = 1,
        [changeWidth]: state => state.width = 1,
    }
)

