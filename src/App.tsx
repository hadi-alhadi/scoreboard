import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScoreboardsGrid from "./components/ScoreboardsGrid/ScoreboardsGrid";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Banner from "./components/Banner/Banner.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Banner />

      <Container maxWidth="md">
        <ScoreboardsGrid />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
