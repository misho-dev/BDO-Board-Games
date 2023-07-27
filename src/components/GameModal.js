import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Paper } from '@mui/material';

const GameModal = ({ game, open, handleClose }) => {

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>{game.name}</DialogTitle>
      <DialogContent sx={{ overflow: 'auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <img style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }} src={game.image} alt={game.name} />
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="body1" component="div" sx={{ mt: 2 }}>
              <strong>Description:</strong> {game.description}
              <br />
              <strong>Players:</strong> {game.players.min} - {game.players.max}
              <br />
              <strong>Registered Players:</strong> {game.registeredPlayers}
            </Typography>
          </Grid>
        </Grid>
        <Paper sx={{ padding: 2, margin: 'auto', maxWidth: 500, backgroundColor: 'grey.800', color: 'common.white', mt: 4 }}>
          <Typography variant="h6" align="center">The Rules</Typography>
          <Typography variant="body2">{game.rules}</Typography>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
