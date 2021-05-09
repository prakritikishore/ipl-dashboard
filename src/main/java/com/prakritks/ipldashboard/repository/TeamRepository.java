package com.prakritks.ipldashboard.repository;

import com.prakritks.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long>
 {

    Team findByTeamName(String teamName);
    
}
