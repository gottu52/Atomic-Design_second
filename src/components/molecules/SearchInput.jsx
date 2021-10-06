import { PrimaryButton } from "../attoms/buttons/PrimaryButton";
import { Input } from "../attoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
