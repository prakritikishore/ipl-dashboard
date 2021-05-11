import  { React } from 'react';
import { Link } from 'react-router-dom'

export const MatchSmallCard = ({match,teamName}) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`
  return (
    <div className="MatchSmallCard">
      <h3> vs <Link to={otherTeamRoute}>{otherTeam}</Link></h3>
      <p>{match.matchWinner} won the Match by {match.resultMargin} {match.result}</p>
    </div>
  );
}
