import React from "react"
import { Progress, Step, TotalCost, FormActions } from "./components"


export default function App() {
    return (
        <>
        <Progress />
        <section>
            <Step stepId={1} title="Dimensions &amp; Quantity">
                <p className="intro">
                    Enter the width, height, length and quantity of the box(es) you require.
                </p>

                <div className="form-row">
                    <label for="width">Width:</label>
                    <input type="number" name="width" id="width" value="0" min="0" step="0.01" />
                </div>

                <div className="form-row">
                    <label for="height">Height:</label>
                    <input type="number" name="height" id="height" value="0" min="0" step="0.01" />
                </div>

                <div className="form-row">
                    <label for="length">Length:</label>
                    <input type="number" name="length" id="length" value="0" min="0" step="0.01" />
                </div>

                <div className="form-row">
                    <label for="quantity">Quantity:</label>
                    <input type="number" name="quantity" id="quantity" value="0" min="0" step="1" />
                </div>
            </Step>
            <Step stepId={2} title="Cardboard Grade">
                <p className="intro">
                    <strong>FantasticBoxCo</strong> offer a variety of
                    grades of cardboard, each altering the price per m<sup>2</sup>:
                </p>

                <ol className="btn-radios-list">
                    <li>
                        <label>
                            <input type="radio" name="cardboard-grade" value="A" />
                            <span className="btn btn-radio">
                                A Grade<br />$0.20 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="cardboard-grade" value="B" />
                            <span className="btn btn-radio">
                                B Grade<br />$0.10 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="cardboard-grade" value="C" />
                            <span className="btn btn-radio">
                                C Grade<br />$0.05 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                </ol>
            </Step>
            <Step stepId={3} title="Print Quality">
                <p className="intro">
                    A variety of printing options are available for any
                    branding / logos which are required:
                </p>

                <ol className="btn-radios-list">
                    <li>
                        <label>
                            <input type="radio" name="print-quality" value="3-color" />
                            <span className="btn btn-radio">
                                3 colours<br />$0.20 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="print-quality" value="2-color" />
                            <span className="btn btn-radio">
                                2 colours<br />$0.10 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="print-quality" value="black-only" />
                            <span className="btn btn-radio">
                                Black only<br />$0.05 m<sup>2</sup>
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="print-quality" value="no-printing" />
                            <span className="btn btn-radio">
                                No printing<br />$0.00
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="print-quality" value="FantasticBoxCo-branding" />
                            <span className="btn btn-radio">
                                <strong>FantasticBoxCo</strong> branding<br />5% discount on total price
                            </span>
                        </label>
                    </li>
                </ol>
            </Step>
            <Step stepId={4} title="Optional Extras">
                <ol className="btn-radios-list">
                    <li>
                        <label>
                            <input type="checkbox" name="optional-extras" value="handles" />
                            <span className="btn btn-radio">
                                Handles<br />$0.10 per box
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="optional-extras" value="reinforced-bottom" />
                            <span className="btn btn-radio">
                                Reinforced bottom<br />$0.05 per box<br />
                                <small>(only available with grade A cardboard)</small>
                            </span>
                        </label>
                    </li>
                </ol>

            </Step>
        </section>
        <TotalCost />
        <FormActions />
        </>
    )
}
