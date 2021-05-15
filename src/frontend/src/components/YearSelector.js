import  { React } from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss'


export const YearSelector = ({teamName}) =>{

    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR

    for(let y = startYear; y <= endYear; y++)
    {
        years.push(y);
    }

        return(
        years.map(year => <ol className="YearSelector"><Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link></ol>)
       
    )

}