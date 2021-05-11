import  { React } from 'react';
import { Link } from 'react-router-dom'

export const MatchDetailCard = ({match,teamName}) => {

    if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h1> vs <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
      <h2>{match.matchWinner} won the Match by {match.resultMargin} {match.result}</h2>
      <h3>Venue : {match.venue} ({match.date})</h3>
    </div>
  );
}
