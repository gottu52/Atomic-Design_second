import styled from "styled-components";

export const IconWithName = (props) => {
  const { image, name } = props;
  return (
    <SIcon>
      <img height={160} width={160} src={image} alt="プロフィール" />
      <p>{name}</p>
    </SIcon>
  );
};

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
