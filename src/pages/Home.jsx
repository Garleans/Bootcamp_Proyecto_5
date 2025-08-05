import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FilterHeader from "../components/FilterHeader";
import { Translation } from "react-i18next";

const Home = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      if (filters.name) params.append("name", filters.name);
      if (filters.status?.length === 1) params.append("status", filters.status[0]);
      if (filters.species?.length === 1) params.append("species", filters.species[0]);
      if (filters.gender?.length === 1) params.append("gender", filters.gender[0]);

      let results = [];
      let url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
      while (results.length < 1000) {
        const { data } = await axios.get(url);
        results = results.concat(data.results);
        if (!data.info.next) break;
        url = data.info.next;
      }

      const sorted = [...results].sort((a, b) => a.name.localeCompare(b.name));
      setAllCharacters(sorted);

      const pages = Math.ceil(sorted.length / 8);
      setTotalPages(pages);
      setCharacters(sorted.slice((page - 1) * 8, page * 8));
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      setAllCharacters([]);
      setCharacters([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [filters]);

  useEffect(() => {
    const start = (page - 1) * 8;
    const end = page * 8;
    setCharacters(allCharacters.slice(start, end));
  }, [page, allCharacters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters({});
    setPage(1);
  };

  return (
    <>
      <FilterHeader onFilterChange={handleFilterChange} onResetFilters={handleResetFilters} />
      <Box
        sx={{
          // Aquí está la corrección: se añade la ruta base al nombre de la imagen.
          backgroundImage: "url('/Bootcamp_Proyecto_5/space-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          py: 2,
        }}
      >
        <Container>
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
            Buscador de Personajes
          </Typography>

          <Translation>
            {(t) =>
              loading ? (
                <Box display="flex" justifyContent="center" mt={10}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {characters.length === 0 ? (
                    <Typography
                      variant="h6"
                      sx={{ m: 2, width: "100%", textAlign: "center" }}
                    >
                      {t("No characters found")}
                    </Typography>
                  ) : (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 3,
                      }}
                    >
                      {characters.map((character) => (
                        <Card
                          key={character.id}
                          onClick={() => navigate(`/character/${character.id}`)}
                        >
                          <CardMedia
                            component="img"
                            image={character.image}
                            alt={character.name}
                          />
                          <CardContent sx={{ padding: "12px", flexGrow: 1 }}>
                            <Typography variant="subtitle1" gutterBottom noWrap>
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
                      ))}
                    </Box>
                  )}

                  <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                    >
                      {t("Anterior")}
                    </Button>
                    <Typography variant="body1" sx={{ alignSelf: "center" }}>
                      {t("Page")} {page} / {totalPages}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      disabled={page === totalPages}
                      onClick={() => setPage((p) => p + 1)}
                    >
                      {t("Siguiente")}
                    </Button>
                  </Stack>
                </>
              )
            }
          </Translation>
        </Container>
      </Box>
    </>
  );
};

export default Home;