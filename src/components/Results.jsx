import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ inputs }) {
  const results = calculateInvestmentResults(inputs);
  const initialInvestment = inputs.initialInvestment;

  let cumulativeInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          cumulativeInterest += yearData.interest;
          const totalAmountInvested = initialInvestment + yearData.year * inputs.annualInvestment;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(cumulativeInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}