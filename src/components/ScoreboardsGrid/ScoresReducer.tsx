export type Team = {
  name: string;
  countryCode: string;
  score: number;
};

export type Game = {
  gameId: number;
  gameStatus: string;
  homeTeam: Team;
  awayTeam: Team;
};

type ActionTypes = {
  START_GAME: "start";
  UPDATE_SCORE: "update";
  FINISH_GAME: "finish";
  PRE_MATCH: "preMatch";
};

export type Action = {
  type: ActionTypes[keyof ActionTypes];
  data: {
    gameId: number;
    teamId?: number;
  };
};

export type GameState = {
  finishedGames: Game[] | undefined;
  games: Game[];
};

const teamsMap = {
  1: "homeTeam",
  2: "awayTeam",
};

const sortGamesByTotalScore = (currentGame: Game, nextGame: Game) => {
  const currentGameTotalScore =
    currentGame.homeTeam.score + currentGame.awayTeam.score;
  const nextGameTotalScore = nextGame.homeTeam.score + nextGame.awayTeam.score;
  return nextGameTotalScore - currentGameTotalScore;
};
export const gameStatus = {
  PRE_MATCH: "PM",
  KICK_OFF: "KO",
  FULL_TIME: "FT",
};
export const actionTypes: ActionTypes = {
  START_GAME: "start",
  UPDATE_SCORE: "update",
  FINISH_GAME: "finish",
  PRE_MATCH: "preMatch",
};
export const initialState: GameState = {
  finishedGames: [],
  games: [
    {
      gameId: 0,
      gameStatus: gameStatus.PRE_MATCH,
      homeTeam: {
        name: "Mexico",
        countryCode: "mx",
        score: 0,
      },
      awayTeam: {
        name: "Canada",
        countryCode: "ca",
        score: 0,
      },
    },
    {
      gameId: 1,
      gameStatus: gameStatus.PRE_MATCH,
      homeTeam: {
        name: "Spain",
        countryCode: "es",
        score: 0,
      },
      awayTeam: {
        name: "Brazil",
        countryCode: "br",
        score: 0,
      },
    },
    {
      gameId: 2,
      gameStatus: gameStatus.PRE_MATCH,
      homeTeam: {
        name: "Germany",
        countryCode: "de",
        score: 0,
      },
      awayTeam: {
        name: "France",
        countryCode: "fr",
        score: 0,
      },
    },
    {
      gameId: 3,
      gameStatus: gameStatus.PRE_MATCH,
      homeTeam: {
        name: "Uruguay",
        countryCode: "uy",
        score: 0,
      },
      awayTeam: {
        name: "Italy",
        countryCode: "it",
        score: 0,
      },
    },
    {
      gameId: 4,
      gameStatus: gameStatus.PRE_MATCH,
      homeTeam: {
        name: "Argentina",
        countryCode: "ar",
        score: 0,
      },
      awayTeam: {
        name: "Australia",
        countryCode: "au",
        score: 0,
      },
    },
  ],
};

const reducer = (state: GameState, action: Action) => {
  const { type, data } = action;
  const { gameId } = data;

  switch (type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.gameId === gameId
            ? { ...game, gameStatus: gameStatus.KICK_OFF }
            : game,
        ),
      };
    case actionTypes.UPDATE_SCORE:
      const { teamId } = data;

      // Don't update the score if the game has not started yer
      const isGameStarted = state.games.find(
        (game) =>
          game.gameId === gameId && game.gameStatus === gameStatus.KICK_OFF,
      );
      if (!isGameStarted) {
        return state;
      }

      // Increment the goals value of the team who scored
      const team = teamsMap[teamId];
      return {
        ...state,
        games: state.games.map((game) =>
          game.gameId === gameId
            ? {
                ...game,
                [team]: {
                  ...game[team],
                  score: game[team].score + 1,
                },
              }
            : game,
        ),
      };
    case actionTypes.FINISH_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game.gameId !== gameId),
        finishedGames: [
          ...state.finishedGames,
          state.games.find((game) => game.gameId === gameId),
        ]
          .filter(Boolean)
          .sort(sortGamesByTotalScore)
          .map((game) => {
            game.gameStatus = gameStatus.FULL_TIME;
            return game;
          }),
      };
    default:
      throw new Error("Unrecognized action type. Please check ScoresReducer.");
  }
};
export default reducer;
