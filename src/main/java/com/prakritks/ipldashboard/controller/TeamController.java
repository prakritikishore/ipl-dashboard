package com.prakritks.ipldashboard.controller;

import java.util.List;
import com.prakritks.ipldashboard.model.Match;
import com.prakritks.ipldashboard.model.Team;
import com.prakritks.ipldashboard.repository.MatchRepository;
import com.prakritks.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {
    
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;


    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }


    @GetMapping("/teams")
    public String welcome()
    {
        return "IPL Dashboard";
    }

    @GetMapping("/teams/{teamName}")
    public Team getTeam(@PathVariable String teamName)
    {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setLatestMatches(matchRepository.findLatestMatchesByTeamName(teamName, 4));

        return team;
    }

    @GetMapping("/teams/{teamName}/matches")
    public List<Match> getMatches(@PathVariable String teamName, @RequestParam int year)
    {
        
        return this.matchRepository.getTeamMatchesBetweenDates(teamName,year);
    }

}
