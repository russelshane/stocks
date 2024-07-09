import { NextPage } from "next";
import { Masthead } from "../components/Masthead";
import { Stock } from "../components/Stock";
import { StockContextProvider } from "../util/stockContext";

const Home: NextPage = () => {
  return (
    <main className="w-full h-screen bg-backdrop">
      <Masthead />
      <StockContextProvider>
        <Stock />
      </StockContextProvider>
    </main>
  );
};

export default Home;
