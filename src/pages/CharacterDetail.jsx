import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Link,
} from '@mui/material';
import axios from 'axios';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error al obtener personaje:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Cargando personaje...
        </Typography>
      </Container>
    );
  }

  if (!character) return null;

  const filters = {
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name,
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          height="300"
        />
        <CardContent>
          <Typography variant="h4">{character.name}</Typography>
          {Object.entries(filters).map(([key, value]) => (
            <Typography key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
              <Link
                href={`/?${key}=${encodeURIComponent(value)}`}
                target="_blank"
                rel="noopener"
              >
                {value}
              </Link>
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetail;
