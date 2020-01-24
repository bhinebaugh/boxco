import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { Progress, StepContent, TotalCost, FormActions } from "./components"

const store = configureStore({
    reducer: (state) => state
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
