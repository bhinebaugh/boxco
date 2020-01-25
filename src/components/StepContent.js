import React from 'react'
import Dimensions from "./Dimensions"
import Step from "./Step"
import TotalCost from "./TotalCost"
import Quantity from "./Quantity"
import OptionalExtras from "./OptionalExtras"
import { connect } from 'react-redux'
import RadioSet from './RadioSet'
import { addExtras, changeCardboardGrade, changePrintQuality } from '../actions'

const printOptions = [
    { name: "3 colours", value: "3-color", cost: 0.2 },
    { name: "2 colours", value: "2-color", cost: 0.1 },
    { name: "Black only", value: "black-only", cost: 0.05 },
    { name: "No printing", value: "no-printing", cost: 0 },
    { name: "FantasticBoxCo branding", value: "FantasticBoxCo-branding", cost: 0 }
] // special logic for last option: 5% discount
const cardboardOptions = [
    { name: "A Grade", value: "A", cost: 0.2 },
    { name: "B Grade", value: "B", cost: 0.1 },
    { name: "C Grade", value: "C", cost: 0.05 }
]

const StepContent = ({ activeId, grade, printQuality, addExtras, changeCardboardGrade, changePrintQuality }) => {

    switch(activeId) {
        case 1:
            return (
                <Step stepId={1} title="Dimensions &amp; Quantity">
                    <p className="intro">
                        Enter the width, height, length and quantity of the box(es) you require.
                    </p>
                    <Dimensions />
                    <Quantity />
                </Step>
            )
        case 2:
            return (
                <Step stepId={2} title="Cardboard Grade">
                    <p className="intro">
                        <strong>FantasticBoxCo</strong> offer a variety of
                        grades of cardboard, each altering the price per m<sup>2</sup>:
                    </p>
                    <RadioSet handleChange={changeCardboardGrade} inputName="cardboard-grade" options={cardboardOptions} selectedValue={grade} />
                </Step>
            )
        case 3:
            return (
                <Step stepId={3} title="Print Quality">
                    <p className="intro">
                        A variety of printing options are available for any
                        branding / logos which are required:
                    </p>
                    <RadioSet handleChange={changePrintQuality} inputName="print-quality" options={printOptions} selectedValue={printQuality} />
                </Step>
            )
        case 4:
            return (
                <Step stepId={4} title="Optional Extras">
                    <OptionalExtras />
                </Step>
            )
        case 5:
            return (<TotalCost />)
        default:
            return null
    }
}

export default connect(
    state => ({
        activeId: state.currentStep,
        grade: state.cardboard,
        printQuality: state.printQuality,
    }),
    { addExtras, changeCardboardGrade, changePrintQuality, }
)(StepContent)