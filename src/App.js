import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { cardboard, currentStep, dimensions, printQuality, selectedExtras, quantity } from "./reducers"
import { Progress, StepContent } from "./components"

const store = configureStore({
    reducer: {
        cardboard,
        currentStep,
        dimensions,
        printQuality,
        selectedExtras,
        quantity,
    }
})

export default function App() {
    return (
        <Provider store={store}>
            <Progress activeId={1} />
            <section>
                <StepContent activeId={1} />
            </section>
        </Provider>
    )
}
