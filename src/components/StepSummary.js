import React from "react"

const StepSummary = ({ children, stepId, stepName, isActive }) => {
    let classNames = ["step"]
    let href="step-"+stepId
    classNames.push(href)
    if (isActive) { classNames.push("is-active")}
    return (
        <li>
            <a href={href} className={classNames.join(" ")}>
                <div className="step-number">{stepId}</div>
                <h3 className="step-heading">{stepName}</h3>
                <span className="step-value">{children}</span>
            </a>
        </li>
    )
}

export default StepSummary