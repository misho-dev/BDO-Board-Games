import React, { useEffect, useState } from "react";
import BoardGameCard from "./BoardGameCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Papa from "papaparse";
import gameData from "../games.json";

const MainPage = () => {
  const theme = useTheme();
  const [registrationData, setRegistrationData] = useState([]);
  const [gamesWithPlayerCounts, setGamesWithPlayerCounts] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCM_RTY8rNIKrZvTiuCR9EJB0Xqhrk8HLk3gGtXsZjWZbLJiLcUdjeBOilsSTk4dJcZfh1e04Z6Hp4/pub?output=csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        setRegistrationData(parsedData);
      });
  }, []);

  useEffect(() => {
    const newGamesWithPlayerCounts = gameData.map((game) => {
      const registeredPlayers = registrationData.filter(
        (registration) =>
          registration["Which game will you be playing?"] === game.name
      ).length;
      return { ...game, registeredPlayers };
    });
    setGamesWithPlayerCounts(newGamesWithPlayerCounts);
  }, [gameData, registrationData]);

  return (
    <Container maxWidth="false" style={{ height: "100vh", width: "100vw" }}>
      <Box
        sx={{
          marginBottom: "20px",
          padding: "2em",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "white",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to BDO Game Night!
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          We gather for an evening of friendly competition and camaraderie.
        </Typography>
        <Typography variant="body1" align="center">
          To register for a game, simply click the "Register for a game" button
          below and fill out the form with your information. Be sure to select
          the game you're interested in from the list. The number of registered
          players for each game will be dynamically updated here on the main
          page.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Please note that a small fee of 20 GEL is required after your
          placement is confirmed by the organizers. This fee covers the cost of
          pizza, snacks, soft drinks, and beer for the evening.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We look forward to seeing you at the on Game Night.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          AUGUST 4th -- 18:00 -- 4th FLOOR
        </Typography>
      </Box>

      <Typography variant="h4" align="center" color="white">
        Available Games
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {gamesWithPlayerCounts.map((game) => (
          <BoardGameCard
            key={game.id}
            game={game}
            registeredPlayers={game.registeredPlayers}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/register"
          sx={{ mt: 2 }}
        >
          Register for a game
        </Button>
      </Box>
    </Container>
  );
};

export default MainPage;
