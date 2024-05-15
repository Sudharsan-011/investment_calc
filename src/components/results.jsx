import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Results({userInput}){
    console.log(userInput);
    const result= calculateInvestmentResults(userInput);
    console.log(result);
    const initialInvest=result[0].valueEndOfYear-result[0].annualInvestment-result[0].interest;
    return(  <>

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment</th>
                    <th>Intrest{result.year}</th>
                    <th>tot Intrest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(data=> {
                    const totalIntrest=data.valueEndOfYear-data.annualInvestment * data.year-initialInvest;
                    const  totAmtInvest=data.valueEndOfYear-totalIntrest;
                    return(

                        <tr key= {data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totAmtInvest)}</td>
                        </tr>
                         )})}
                         
                            </tbody>
        </table>
</>
    );
}