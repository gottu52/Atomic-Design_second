import { PrimaryButton } from "./components/attoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/attoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>sample</PrimaryButton>
      <SecondaryButton>sample</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
