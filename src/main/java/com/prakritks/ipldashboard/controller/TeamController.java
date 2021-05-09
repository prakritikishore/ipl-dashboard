package com.prakritks.ipldashboard.controller;

import com.prakritks.ipldashboard.model.Team;
import com.prakritks.ipldashboard.repository.MatchRepository;
import com.prakritks.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {
    
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;


    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }


    @GetMapping("/team")
    public String welcome()
    {
        return "IPL Dashboard";
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName)
    {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setLatestMatches(matchRepository.findLatestMatchesByTeamName(teamName, 4));

        return team;
    }

}
