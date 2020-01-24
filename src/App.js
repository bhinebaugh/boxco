import React from "react"
import { Progress, StepContent, TotalCost, FormActions } from "./components"

export default function App() {
    return (
        <>
        <Progress activeId={1} />
        <section>
            <StepContent activeId={1} />
        </section>
        </>
    )
}
