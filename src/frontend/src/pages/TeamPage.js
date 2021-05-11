import  { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

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
        <h1>{team.teamName}</h1>
        <MatchDetailCard match={team.latestMatches[0]} teamName={team.teamName} />
        {team.latestMatches.slice(1).map(match => <MatchSmallCard match={match} teamName={team.teamName} />)}

    </div>
  );
}
