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
import { useNavigate } from "react-router-dom";
import FilterHeader from "../components/FilterHeader";
import { Translation } from "react-i18next";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      let url = "https://rickandmortyapi.com/api/character";
      const params = new URLSearchParams();

      if (filters.status?.length === 1) params.append("status", filters.status[0]);
      if (filters.species?.length === 1) params.append("species", filters.species[0]);
      if (filters.gender?.length === 1) params.append("gender", filters.gender[0]);

      const response = await axios.get(`${url}?${params.toString()}`);
      const sorted = response.data.results.sort((a, b) => b.name.localeCompare(a.name));
      setCharacters(sorted);
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [filters]);

  return (
    <>
      <FilterHeader onFilterChange={setFilters} />
      <Container sx={{ mt: 4 }}>
        <Translation>
          {(t) =>
            loading ? (
              <CircularProgress />
            ) : (
              <Grid container spacing={3}>
                {characters.length === 0 ? (
                  <Typography variant="h6" sx={{ m: 2 }}>
                    {t("No characters found")}
                  </Typography>
                ) : (
                  characters.map((character) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                      <Card
                        onClick={() => navigate(`/character/${character.id}`)}
                        sx={{ cursor: "pointer" }}
                      >
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
                            {t("Estado")}: {t(character.status)}
                          </Typography>
                          <Typography variant="body2">
                            {t("Especie")}: {t(character.species)}
                          </Typography>
                          <Typography variant="body2">
                            {t("Género")}: {t(character.gender)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                )}
              </Grid>
            )
          }
        </Translation>
      </Container>
    </>
  );
};

export default Home;
