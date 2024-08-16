import { React, useState } from 'react'

export default function Calculate_BMI() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [message, setMessage] = useState("")
    function calculatebmi(e) {
        e.preventDefault()
        var cm = height / 100
        var bmi = Math.round(weight / (cm * cm))
        setMessage(bmi)
        // if (bmi < 18.5) {
        //     setMessage("Your BMI is {bmi} and you are skinny")
        // }
        // else if (bmi < 25) {

        // }
    }
    return (
        <div>
            <section className="calculate section">
                <div className="calculate__container container grid">
                    <div className="calculate__content">
                        <div className="section__titles">
                            <h1 className="section__title-border">CALCULATE</h1>
                            <h1 className="section__title">YOUR BMI</h1>
                        </div>
                        <br /> <br />
                        <form action="" className="calculate__form" id="calculate-form">
                            <div className="calculate__box">
                                <input type="number" placeholder="Height" className="calculate__input" id="calculate-cm" value={height} onChange={(e) => {
                                    setHeight(e.target.value)
                                }} />
                                <label for="" className="calculate__label">cm</label>
                            </div>
                            <div className="calculate__box">
                                <input type="number" placeholder="Weight" className="calculate__input" id="calculate-kg" value={weight} onChange={
                                    (e) => {
                                        setWeight(e.target.value)
                                    }
                                } />
                                <label for="" className="calculate__label">kg</label>
                            </div>

                            <button type="submit" className="button button__flex" onClick={calculatebmi}>
                                Calculate Now <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>

                        <p className="calculate__message" id="calculate-message">{message}</p>

                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    )
}
