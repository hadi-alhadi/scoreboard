import { Typography } from "@mui/material";
import styled from "@emotion/styled";

type ResultProps = {
  homeTeamScore: number;
  awayTeamScore: number;
};

const Result = ({ homeTeamScore, awayTeamScore }: ResultProps) => {
  return (
    <ResultContainer variant={"h6"}>
      {homeTeamScore} . {awayTeamScore}
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled(Typography)`
  font-weight: 400;
  color: #03122b;
`;
