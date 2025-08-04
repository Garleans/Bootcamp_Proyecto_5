import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        const sorted = response.data.results.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        setCharacters(sorted);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Cargando personajes...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <Card>
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                height="250"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {character.name}
                </Typography>
                <Typography variant="body2">
                  Estado: {character.status}
                </Typography>
                <Typography variant="body2">
                  Especie: {character.species}
                </Typography>
                <Typography variant="body2">
                  Género: {character.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
