import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GameModal from './GameModal';

const BoardGameCard = ({ game, registeredPlayers }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ maxWidth: 345, transition: '0.3s', margin: 2 }} onClick={handleOpen}>
        <CardMedia
          component="img"
          height="300"
          image={game.image}
          alt={game.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Registered Players: {registeredPlayers}/{game.players.max}
          </Typography>
        </CardContent>
      </Card>
      <GameModal game={game} open={open} handleClose={handleClose} />
    </div>
  );
};

export default BoardGameCard;