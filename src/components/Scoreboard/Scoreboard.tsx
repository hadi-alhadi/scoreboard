import TeamView from "../TeamView/TeamView";
import Result from "../Result/Result";
import GameStatus from "../GameStatus/GameStatus";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import { Game } from "../ScoreboardsGrid/ScoresReducer.tsx";

type ScoreboardProps = {
  pairScore: Game;
  status: string;
};

const Scoreboard = ({ pairScore, status }: ScoreboardProps) => {
  const getRandomLetter = (): string => {
    const letters = ["A", "B", "C", "D", "E", "F"];
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  };

  return (
    <CardContainer key={crypto.randomUUID()}>
      <Grid container spacing={0} alignItems="center">
        <Group item xs={2} md={2}>
          <GroupText gutterBottom>Group {getRandomLetter()}</GroupText>
        </Group>

        <Grid item xs={8} md={8} sx={{ textAlign: "center" }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={5} md={5} sx={{ textAlign: "left" }}>
              <TeamView teamData={pairScore.homeTeam} isHomeTeam={true} />
            </Grid>

            <Grid item xs={2} md={2} sx={{ textAlign: "center" }}>
              <Result
                homeTeamScore={pairScore.homeTeam.score}
                awayTeamScore={pairScore.awayTeam.score}
              />
            </Grid>

            <Grid item xs={5} md={5} sx={{ textAlign: "right" }}>
              <TeamView teamData={pairScore.awayTeam} isHomeTeam={false} />
            </Grid>
          </Grid>
        </Grid>

        <GameStatusContainer item xs={2} md={2} className="dFlex">
          <GameStatus status={status} />
          <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </GameStatusContainer>
      </Grid>
    </CardContainer>
  );
};

export default Scoreboard;

const CardContainer = styled(Card)`
  min-width: 275px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: inset 0px 0px 0px 1px #000;
    -moz-box-shadow: inset 0px 0px 0px 1px #000;
    box-shadow: inset 0px 0px 0px 1px #000;
  }
`;

const Group = styled(Grid)`
  text-align: center;
`;
const GroupText = styled(Typography)`
  font-size: 0.75rem !important;
  opacity: 0.5;
`;

const GameStatusContainer = styled(Grid)`
  justify-content: flex-end !important;
  text-align: right;
  align-items: center;
`;
