import { createAction } from "@reduxjs/toolkit"

export const nextStep = createAction('NEXT_STEP')
export const previousStep = createAction('PREVIOUS_STEP')
export const changeHeight = createAction('CHANGE_HEIGHT')
export const changeLength = createAction('CHANGE_LENGTH')
export const changeWidth = createAction('CHANGE_WIDTH')
export const changeQuantity = createAction('CHANGE_QUANTITY')
export const changeCardboardGrade = createAction('CHANGE_CARDBOARD_GRADE')
export const changePrintQuality = createAction('CHANGE_PRINT_QUALITY')
export const addExtras = createAction('ADD_EXTRAS')