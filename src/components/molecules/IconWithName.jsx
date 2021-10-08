import styled from "styled-components";
import React, { memo, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const IconWithName = memo((props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SIcon>
      <img height={160} width={160} src={image} alt="プロフィール" />
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
    </SIcon>
  );
});

const SIcon = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40415e;
  }
`;

const SEdit = styled.div`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
