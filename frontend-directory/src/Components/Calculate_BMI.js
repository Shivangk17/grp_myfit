import { React, useState } from 'react'

export default function Calculate_BMI() {
    var [height, setHeight] = useState('Height')
    var [weight, setWeight] = useState('Weight')
    var [message, setMessage] = useState("")
    function calculatebmi(e) {
        e.preventDefault()
    if (height === '' || weight === '') {
        // message.classList.remove('color-green')
        // message.classList.add('color-red')
        //show message
        setMessage('Fill in the Height and Weight')

        //remove message three seconds
        setTimeout(() => {
            setMessage('')
        }, 3000)
    } else {
        //BMI Formula
        const cm = height / 100,
            kg = weight,
            bmi = Math.round(kg / (cm * cm))

        if (bmi < 18.5) {
            //Add color and display message
            // calculateMessage.classList.add('color-red')
            setMessage(`Your BMI is ${bmi} and you are skinny`)

        }
        else if (bmi < 25) {
            // calculateMessage.classList.add('color-red')
            setMessage(`Your BMI is ${bmi} and you are healthy`)
        }
        else {
            // calculateMessage.classList.add('color-red')
            setMessage(`Your BMI is ${bmi} and you are overweight`)
        }

        

        //Remove message in four seconds
        setTimeout(() => {
            setMessage('')
            //To clear the input field
            setHeight('Height')
            setWeight('Weight')
        }, 5000)
    }
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
