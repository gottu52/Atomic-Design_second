import { Header } from "../attoms/layput/Header";

export const OnlyHeader = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
