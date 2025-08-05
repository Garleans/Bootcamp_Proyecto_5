import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Container,
  Avatar,
  Stack,
  Divider,
  Modal,
  Paper,
  IconButton,
  Card,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Translation } from "react-i18next";

const styleModal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "#111",
  border: "2px solid #00ffcc",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  color: "#fff",
};

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(data);

        const episodeIds = data.episode.map((ep) => ep.split("/").pop());
        const uniqueIds = [...new Set(episodeIds)];

        const episodesResponse = await axios.get(
          `https://rickandmortyapi.com/api/episode/${uniqueIds.join(",")}`
        );
        const episodesData = Array.isArray(episodesResponse.data)
          ? episodesResponse.data
          : [episodesResponse.data];
        setEpisodes(episodesData);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
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
      <Typography variant="h6" color="error">
        Personaje no encontrado
      </Typography>
    );
  }

  return (
    <Translation>
      {(t) => (
        <Box
          sx={{
            // Aquí está la corrección: se añade la ruta base al nombre de la imagen.
            backgroundImage: "url('/Bootcamp_Proyecto_5/space-bg.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            minHeight: "100vh",
            py: 4,
          }}
        >
          <Container maxWidth="md">
            <Card
              sx={{
                backgroundColor: "#111",
                p: 4,
                borderRadius: 4,
                boxShadow: "0 0 20px #00ffcc",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Avatar
                src={character.image}
                alt={character.name}
                sx={{
                  width: 240,
                  height: 240,
                  border: "4px solid #00ffcc",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  {character.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("Estado")}:</strong> {t(character.status)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("Especie")}:</strong> {t(character.species)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("Género")}:</strong> {t(character.gender)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("Origen")}:</strong> {character.origin?.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>{t("Ubicación actual")}:</strong> {character.location?.name}
                </Typography>
              </Box>
            </Card>

            <Box mt={4} p={3} sx={{ backgroundColor: "#222", borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#00ffcc" }}>
                {t("Aparece en estos episodios")}:
              </Typography>
              <Divider sx={{ mb: 2, borderColor: "#00ffcc" }} />
              {episodes.slice(0, 10).map((ep) => (
                <Typography key={ep.id} variant="body2" sx={{ mb: 1 }}>
                  {ep.episode} - {ep.name} ({ep.air_date})
                </Typography>
              ))}
              {episodes.length > 10 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setModalOpen(true)}
                  sx={{ mt: 1 }}
                >
                  {t("Ver todos los episodios")}
                </Button>
              )}
            </Box>

            <Stack direction="row" justifyContent="center" mt={4}>
              <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                {t("Volver al inicio")}
              </Button>
            </Stack>

            {/* Modal de episodios */}
            <Modal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              aria-labelledby="modal-episodes-title"
            >
              <Paper sx={styleModal}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography id="modal-episodes-title" variant="h6" color="#00ffcc">
                    {t("Episodios completos")}
                  </Typography>
                  <IconButton onClick={() => setModalOpen(false)} sx={{ color: "#00ffcc" }}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Divider sx={{ mb: 2, borderColor: "#00ffcc" }} />
                {episodes.map((ep) => (
                  <Typography key={ep.id} variant="body2" sx={{ mb: 1 }}>
                    {ep.episode} - {ep.name} ({ep.air_date})
                  </Typography>
                ))}
              </Paper>
            </Modal>
          </Container>
        </Box>
      )}
    </Translation>
  );
};

export default CharacterDetail;