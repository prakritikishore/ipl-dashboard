import  { React, useEffect, useState } from 'react';
import { PieChartInternal } from '../components/PieChartInternal';
import { Link, useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';

export const TeamPage = () => {

    const [team, setTeam] = useState({latestMatches: []});
    const {teamName} = useParams();
    useEffect(

        () => {

            const fetchMatches = async () => {

                const response = await fetch(`http://localhost:8080/teams/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };

            fetchMatches();
        }, [teamName]
    );

if(!team || !team.teamName)
{
 return <h1>Error 404 : Team not Found</h1>
}
 return (
    <div className="TeamPage">
        <div className="team-name-section"><h1 className="team-name">{team.teamName}</h1></div>
        <div className="win-loss-section">
            <h1>Win/Loss</h1>
            <PieChartInternal win={team.totalWins} loss={team.totalMatches - team.totalWins} />
        </div>
        <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard match={team.latestMatches[0]} teamName={team.teamName} />
        </div>
        {team.latestMatches.slice(1).map(match => <MatchSmallCard match={match} teamName={team.teamName} />)}
        <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}><a href="`/Kolkata Knight Riders/2020`"> <h1> |More| </h1> </a></Link>
            </div>
    </div>
  );
}
