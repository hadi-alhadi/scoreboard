import { useReducer, useState } from "react";
import useInterval from "../../hooks/useInterval";
import ScoresReducer, {
  Action,
  actionTypes,
  GameState,
  initialState,
} from "./ScoresReducer";
import useRandomInterval from "../../hooks/useRandomInterval";
import useTimeout from "../../hooks/useTimeout";
import Scoreboard from "../Scoreboard/Scoreboard";
import MessageBoard from "../MessageBoard/MessageBoard";
import { getRandomInt } from "../../utils/randomInt";
import { Stack } from "@mui/material";
import { areAllGamesFinished } from "../../utils/areAllGamesFinished.ts";

const TIME_BEFORE_GAMES_START = 0; // seconds
const PLAYING_TIME = 90000; // milliseconds
const ScoreboardsGrid = () => {
  const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
  const [state, dispatch] = useReducer<React.Reducer<GameState, Action>>(
    ScoresReducer,
    initialState,
  );

  // const [state, dispatch] = useReducer(ScoresReducer, initialState);
  const [isPlayingTime, setIsPlayingTime] = useState(true);

  const minGameId = 0;
  const { games, finishedGames } = state;
  const gamesToRender = [...games, ...finishedGames];
  const maxGameId = games.length - 1;

  // Initial countdown time interval
  useInterval(() => {
    setTimeElapsed((timeElapsed) => timeElapsed - 1);

    if (timeElapsed === 0) {
      setTimeElapsed(timeElapsed); // stop the timer
    }
  }, 1000);

  // Start games in random moment of time
  const delay = [3000, 4000];
  const cancelUpdateGameState = useRandomInterval(
    () => {
      if (isPlayingTime) {
        dispatch({
          type: actionTypes.START_GAME,
          data: { gameId: getRandomInt(minGameId, maxGameId) },
        });
      } else {
        dispatch({
          type: actionTypes.FINISH_GAME,
          data: {
            gameId: getRandomInt(minGameId, initialState.games.length - 1),
          },
        });
      }
    },
    ...delay,
  );

  // Start game score updates
  const updateScoreDelay = [3000, 8000];
  const cancelUpdateScoreInterval = useRandomInterval(
    () => {
      dispatch({
        type: actionTypes.UPDATE_SCORE,
        data: {
          gameId: getRandomInt(minGameId, maxGameId),
          teamId: getRandomInt(1, 2),
        },
      });
    },
    ...updateScoreDelay,
  );

  if (areAllGamesFinished(games)) {
    cancelUpdateGameState();
    cancelUpdateScoreInterval();
  }

  // Start a timeout for when to finish the games
  useTimeout(() => {
    setIsPlayingTime(false);
  }, PLAYING_TIME);

  const getGameStatus = (status: string) => status;

  const getScoreBoardStateMessage = () =>
    areAllGamesFinished(games) ? "Summary" : "Current Games";

  return (
    <>
      {timeElapsed === 0 ? (
        <>
          <MessageBoard message={getScoreBoardStateMessage()} />
          <Stack spacing={2}>
            {gamesToRender?.map((pairScore) => (
              <Scoreboard
                key={crypto.randomUUID()}
                pairScore={pairScore}
                status={getGameStatus(pairScore.gameStatus)}
              />
            ))}
          </Stack>
        </>
      ) : (
        <MessageBoard
          message={`Games are about to start in ${timeElapsed} seconds.`}
        />
      )}
    </>
  );
};

export default ScoreboardsGrid;
