import styled from "@emotion/styled";

type GameStatusProps = {
  status: string;
};

const GameStatus = ({ status }: GameStatusProps) => {
  return <Status>{status}</Status>;
};

export default GameStatus;

const Status = styled.div`
  background-color: #550065;
  color: #fff;
  min-width: 24px;
  height: 16px;
  font-size: 0.625rem;
  line-height: 1.6;
  text-align: center;
  border-radius: 0.3125rem;
  padding: 0 0.25rem;
`;
