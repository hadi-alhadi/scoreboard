import { Game } from "../components/ScoreboardsGrid/ScoresReducer.tsx";

export const areAllGamesFinished = (startedGames: Game[]) =>
  startedGames.length === 0;
