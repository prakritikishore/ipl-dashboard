import  { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({match,teamName}) => {

    if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatcthWon = teamName === match.matchWinner;
  const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className={isMatcthWon ? 'won-card' : 'loss-card'}>
    <div className="MatchDetailCard">
      <div className="Main-detail">
      <span>vs</span>
      <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
      <h3>{match.tossWinner} had won the toss and elected to {match.tossDecision} first</h3>
      <h3>Venue : {match.venue} ({match.date})</h3>
      <h2>{match.matchWinner} had won the Match by {match.resultMargin} {match.result}</h2>
      </div>
    <div className="other-detail">
    <h3>Man of the Match</h3>
    <p>{match.playerOfMatch}</p>
    <h3>Umpires</h3>
    <p>{match.umpire1}, {match.umpire2}</p>
    </div>
    </div>
    </div>
  );
}
