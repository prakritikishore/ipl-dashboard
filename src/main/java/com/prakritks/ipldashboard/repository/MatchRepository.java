package com.prakritks.ipldashboard.repository;
import java.time.LocalDate;
import java.util.List;
import com.prakritks.ipldashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends CrudRepository<Match,Long>
{
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    default List<Match> findLatestMatchesByTeamName(String teamName, int pageSize)
    {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, pageSize));
    }

    //List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(String teamName1, LocalDate date1, LocalDate date2
    //,String teamName2, LocalDate date3, LocalDate date4);

    default List<Match> getTeamMatchesBetweenDates(String teamName, int year)
    {   
        LocalDate date1 = LocalDate.of(year, 1, 1);
        LocalDate date2 = LocalDate.of(year + 1,1,1);
        //return getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(teamName,date1,date2,teamName,date1,date2);
        return getTeamMatchesBetweenDatesByJpql(teamName,date1,date2);
    }

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> getTeamMatchesBetweenDatesByJpql(
        @Param("teamName") String teamName,
        @Param("startDate") LocalDate startDate, 
        @Param("endDate") LocalDate endDate
    );


    
}
