import React, { useState } from 'react';
// import './Calculate_BMI.css';

export default function Calculate_BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [weightGoal, setWeightGoal] = useState('');
  const [calories, setCalories] = useState(null);
  const [goalType, setGoalType] = useState(''); 

  function calculateBMI(e) {
    e.preventDefault();
    if (height === '' || weight === '') {
      setMessage('Please fill in both Height and Weight.');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      const cm = height / 100;
      const kg = weight;
      const bmiValue = Math.round(kg / (cm * cm));

      setBmi(bmiValue);

      let categoryValue = '';
      if (bmiValue < 18.5) {
        categoryValue = 'Underweight';
        setMessage(`Your BMI is ${bmiValue}, and you are underweight. Consider gaining weight.`);
      } else if (bmiValue < 25) {
        categoryValue = 'Healthy';
        setMessage(`Your BMI is ${bmiValue}, and you are healthy.`);
      } else if (bmiValue < 30) {
        categoryValue = 'Overweight';
        setMessage(`Your BMI is ${bmiValue}, and you are overweight. Consider losing weight.`);
      } else {
        categoryValue = 'Obese';
        setMessage(`Your BMI is ${bmiValue}, and you are obese. Consider losing weight.`);
      }

      setCategory(categoryValue);
      calculateBMR();
    }
  }

  function calculateBMR() {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    setBmr(bmrValue.toFixed(2));
  }

  function calculateCalories(goalType) {
    if (!weightGoal || weightGoal <= 0) {
      setMessage('Please enter a valid weight goal.');
      return;
    }

    let calorieAdjustment = 0;

    if (goalType === 'loss') {
      calorieAdjustment = -(weightGoal * 7700 / 30); // Weight loss in kg -> calorie deficit
      if (calorieAdjustment < -1000) calorieAdjustment = -1000; // Max safe deficit
      if (calorieAdjustment > -500) calorieAdjustment = -500; // Min effective deficit
    } else if (goalType === 'gain') {
      calorieAdjustment = weightGoal * 7700 / 30; // Weight gain in kg -> calorie surplus
      if (calorieAdjustment > 1000) calorieAdjustment = 1000; // Max safe surplus
      if (calorieAdjustment < 500) calorieAdjustment = 500; // Min effective surplus
    }

    const dailyCalories = (bmr * activityLevel + calorieAdjustment).toFixed(2);
    setCalories(dailyCalories);
  }

  return (
    <div className="calculate-bmi-wrapper">
      <section className="calculate section">
        <div className="calculate__container container grid">
          <div className="calculate__content">
            <div className="section__titles">
              <h1 className="section__title-border">CALCULATE</h1>
              <h1 className="section__title">YOUR BMI & BMR</h1>
            </div>
            <br /> <br />
            <form className="calculate__form" onSubmit={calculateBMI}>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Height (cm)"
                  className="calculate__input"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <label className="calculate__label">cm</label>
              </div>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  className="calculate__input"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <label className="calculate__label">kg</label>
              </div>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Age"
                  className="calculate__input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label className="calculate__label">years</label>
              </div>
              <div className="calculate__box">
                <select
                  className="calculate__input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label className="calculate__label">Gender</label>
              </div>
              <div className="calculate__box">
                <select
                  className="calculate__input"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <option value="1.2">Sedentary (little or no exercise)</option>
                  <option value="1.375">Lightly active (light exercise/sports)</option>
                  <option value="1.55">Moderately active (moderate exercise/sports)</option>
                  <option value="1.725">Very active (hard exercise/sports)</option>
                  <option value="1.9">Super active (very hard exercise/sports)</option>
                </select>
                <label className="calculate__label">Activity Level</label>
              </div>
              <button type="submit" className="button button__flex">
                Calculate Now <i className="ri-arrow-right-line"></i>
              </button>
            </form>

            <p className="calculate__message">{message}</p>

            {bmr && (
              <div style={{color : 'red'}}>
                <h2>Results</h2>
                <p>BMI: {bmi}</p>
                <p>BMR: {bmr} kcal/day</p>
                <p>Category: {category}</p>

                {(category === 'Overweight' || category === 'Obese' || category === 'Underweight' || category === 'Healthy') && (
                  <div>
                    <h3>Adjust Your Weight Goal</h3>
                    <div className="calculate__box">
                      <input
                        type="number"
                        placeholder={`Weight Goal (${category === 'Underweight' ? 'gain' : 'loss'} in kg)`}
                        className="calculate__input"
                        value={weightGoal}
                        onChange={(e) => setWeightGoal(e.target.value)}
                      />
                      <label className="calculate__label">kg</label>
                    </div>
                    <div className="calculate__options">
                      {category === 'Healthy' && (
                        <>
                          <button className="button button__flex" onClick={() => { setGoalType('loss'); calculateCalories('loss'); }}>
                            Weight Loss <i className="ri-arrow-right-line"></i>
                          </button>
                          <button className="button button__flex" onClick={() => { setGoalType('gain'); calculateCalories('gain'); }}>
                            Weight Gain <i className="ri-arrow-right-line"></i>
                          </button>
                        </>
                      )}
                      {(category === 'Overweight' || category === 'Obese' || category === 'Underweight') && (
                        <button className="button button__flex" onClick={() => { setGoalType(category === 'Underweight' ? 'gain' : 'loss'); calculateCalories(category === 'Underweight' ? 'gain' : 'loss'); }}>
                          {category === 'Underweight' ? 'Weight Gain' : 'Weight Loss'} <i className="ri-arrow-right-line"></i>
                        </button>
                      )}
                    </div>
                    {calories && (
                      <div style={{ color: 'red' }}>
                      <h3>Adjusted Plan</h3>
                      <p>BMI: {bmi}</p>
                      <p>BMR: {bmr} kcal/day</p>
                      <p>Daily Calories: {calories} kcal</p>
                    </div>
                    
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
