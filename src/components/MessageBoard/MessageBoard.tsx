import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const MessageBoard: React.FC<{ message: string }> = ({ message }) => {
  return <MessageContainer variant={"h4"}>{message}</MessageContainer>;
};

export default MessageBoard;

const MessageContainer = styled(Typography)`
  font-weight: 500;
  text-transform: uppercase;
  margin: 1rem !important;
  opacity: 0.65;
  font-style: italic;
`;
