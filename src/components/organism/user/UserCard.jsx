import styled from "styled-components";
import { Card } from "../../attoms/card/Card";
import { IconWithName } from "../../molecules/IconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <IconWithName name={user.name} image={user.image} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company}</dd>
        <dt>web</dt>
        <dd>{user.web}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow: break-word;
  }
`;
