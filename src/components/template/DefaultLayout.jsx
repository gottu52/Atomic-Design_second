import { Footer } from "../attoms/layput/Footer";
import { Header } from "../attoms/layput/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
