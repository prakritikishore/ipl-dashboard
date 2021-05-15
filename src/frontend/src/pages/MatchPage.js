import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from "../components/MatchDetailCard";
import './MatchPage.scss';
import { YearSelector } from "../components/YearSelector"

export const MatchPage = () => {

    const [matches, setmatches] = useState([]);
    const {teamName, year} = useParams();    
    useEffect(

        () => {

            const fetchMatches = async () => {

                const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setmatches(data);
            };

            fetchMatches();

        }, [teamName, year]

    );
    return (
        <div className="MatchPage">
            <div>
            <h2 className="year-selector">Select Year</h2>
            <YearSelector teamName={teamName}/>
            </div>
            <div>
            <h1 className="page-heading">Matches of {teamName} in year {year}</h1>
            {matches.map(match => <MatchDetailCard match={match} teamName={teamName} />)}
            </div>
        </div>
      );
}