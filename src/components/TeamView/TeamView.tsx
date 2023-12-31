import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Team as TeamType } from "../ScoreboardsGrid/ScoresReducer.tsx";

type TeamViewProps = {
  teamData: TeamType;
  isHomeTeam: boolean;
};

const TeamView = ({ teamData, isHomeTeam }: TeamViewProps) => {
  const image = (
    <img
      src={`https://flagcdn.com/${teamData.countryCode}.svg`}
      width="24"
      alt={`${teamData.name}`}
    />
  );
  const text = () => {
    return <TeamName variant={"h6"}>{teamData.name}</TeamName>;
  };

  return (
    <>
      {isHomeTeam ? (
        <HomeTeam>
          {text()}
          {image}
        </HomeTeam>
      ) : (
        <Team>
          {image}
          {text()}
        </Team>
      )}
    </>
  );
};

export default TeamView;

const TeamName = styled(Typography)`
  margin: 7px;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 3.75rem;
  img {
    border: 1px solid #d4c164;
  }
`;

const HomeTeam = styled(Team)`
  display: flex;
  justify-content: flex-end;
`;
