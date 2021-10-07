import styled from "styled-components";
import { SearchInput } from "../../components/molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `まふゆ${val}`,
    mail: "******@mail",
    tel: "000-000-0000",
    company: "damy-company",
    web: "あああ.com"
  };
});

export const UserPage = () => {
  return (
    <Scontainer>
      <h1>ユーザー一覧</h1>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
