import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(data);
      } catch (error) {
        console.error("Error al obtener personaje:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress sx={{ color: "#00ffcc" }} />
      </Box>
    );
  }

  if (!character) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        {t("No character found")}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: "url('/space-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
            backgroundColor: "#111",
            border: "1px solid #00ff00",
            boxShadow: "0 0 20px #00ff00",
          }}
        >
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            sx={{
              width: 200,
              height: 200,
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #00ffcc",
              mb: 2,
            }}
          />

          <Typography variant="h4" gutterBottom>
            {character.name}
          </Typography>

          <Stack spacing={1} sx={{ color: "#ccc" }}>
            <Typography variant="body1">
              <strong>{t("Estado")}:</strong> {t(character.status)}
            </Typography>
            <Typography variant="body1">
              <strong>{t("Especie")}:</strong> {t(character.species)}
            </Typography>
            <Typography variant="body1">
              <strong>{t("Género")}:</strong> {t(character.gender)}
            </Typography>
            <Typography variant="body1">
              <strong>{t("Origen")}:</strong> {character.origin.name}
            </Typography>
            <Typography variant="body1">
              <strong>{t("Ubicación Actual")}:</strong> {character.location.name}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            onClick={() => navigate("/")}
          >
            {t("Volver al Inicio")}
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default CharacterDetail;
