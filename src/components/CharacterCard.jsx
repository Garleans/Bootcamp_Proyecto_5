import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <Card onClick={handleClick} sx={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.species} - {character.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
