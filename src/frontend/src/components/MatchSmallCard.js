import  { React } from 'react';
import { Link } from 'react-router-dom'
import './MatchSmallCard.scss'

export const MatchSmallCard = ({match,teamName}) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={isMatchWon ? 'won-card' : 'loss-card'}>
    <div className="MatchSmallCard">
    <span>vs</span>
      <h3> <Link to={otherTeamRoute}>{otherTeam}</Link></h3>
      <p>{match.matchWinner} won the Match by {match.resultMargin} {match.result}</p>
      <h3>Man of the Match</h3>
    <p>{match.playerOfMatch}</p>
    </div>
    </div>
  );
}
