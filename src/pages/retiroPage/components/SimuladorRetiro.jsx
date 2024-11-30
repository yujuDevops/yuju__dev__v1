import React, { useState } from "react";
import "./simuladorRetiro.css";

const SimuladorRetiro = () => {
  const [age, setAge] = useState(18);
  const [monthlySavings, setMonthlySavings] = useState(0);

  // Función para calcular los montos acumulados
  const calculateRetirementFund = (age, monthlySavings) => {
    const yearsToRetirement = 65 - age;
    const annualSavings = monthlySavings * 12;
    const annualReturnRate = 0.07;
    let accumulatedFund = 0;

    for (let i = 0; i < yearsToRetirement; i++) {
      accumulatedFund = (accumulatedFund + annualSavings) * (1 + annualReturnRate);
    }

    const additionalIncome = accumulatedFund * 0.04;
    return { accumulatedFund, additionalIncome };
  };

  const { accumulatedFund, additionalIncome } = calculateRetirementFund(age, monthlySavings);

  // Función para actualizar el progreso dinámico
  const updateProgress = (value, min, max) => ((value - min) / (max - min)) * 100;

  return (
    <div className="retirement-simulator">
      <div className="sliders">
        {/* Slider de edad */}
        <div>
          <label>¿Qué edad tenés?</label>
          <input
            type="range"
            min="18"
            max="65"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{
              "--progress": `${updateProgress(age, 18, 65)}%`,
            }}
          />
          <div className="contenedor-numerosPR">
            <p className="numerosPR0">18</p>
            <p className="numerosPR0">65</p>
          </div>
          <div className="span-age" >
          <span>{age} años</span>
          </div>
        </div>

        {/* Slider de ahorro mensual */}
        <div>
          <label>¿Cuánto podés ahorrar mensualmente?</label>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(Number(e.target.value))}
            style={{
              "--progress": `${updateProgress(monthlySavings, 0, 20000)}%`,
            }}
          />
          <div className="contenedor-numero-precio">
            <p className="numerosPR0">$0</p>
            <p className="numerosPR0">$20.000</p>
          </div>
          <div className="span-age" >
          <span>${monthlySavings.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="results">
        <p>
          Monto Acumulado a la Edad de Tu Retiro:{" "}
          <strong>
            ${accumulatedFund.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </strong>
        </p>

        <hr className="separator" />

        <p>
          Complemento Adicional a Tu Ingreso Futuro:{" "}
          <strong>
            ${additionalIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default SimuladorRetiro;
