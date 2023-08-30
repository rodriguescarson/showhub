import React from 'react';
import { Button, AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ShowHub</Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" align="center" mt={4}>
          Welcome to ShowHub!
        </Typography>
        <Typography variant="body1" align="center" mt={2}>
          Discover and explore your favorite TV shows.
        </Typography>
        <Grid container spacing={2} mt={4}>
          {featuredShows.map(show => (
            <Grid item xs={12} sm={6} md={4} key={show.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={show.image}
                  alt={show.title}
                />
                <CardContent>
                  <Typography variant="h6">{show.title}</Typography>
                  <Typography variant="body2">{show.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const featuredShows = [
  {
    id: 1,
    title: 'Stranger Things',
    description: 'A group of friends in the 1980s investigates supernatural occurrences.',
    image: 'https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==',
  },
  {
    id: 2,
    title: 'Game of Thrones',
    description: 'Epic fantasy series set in the fictional continents of Westeros and Essos.',
    image: 'https://images2.alphacoders.com/547/547211.png',
  },
  {
    id: 3,
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx',
  },
];

export default Home;
