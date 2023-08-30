import React, { useState } from 'react';
import { Button, TextField, Snackbar, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsSnackbarOpen, setNoResultsSnackbarOpen] = useState(false);

  const fetchSearchResults = async () => {
      try {
          const token = localStorage.getItem('token');
          if (searchQuery) {
              const response = await fetch(
                  `https://showhub-backend.vercel.app/api/search?query=${searchQuery}`,
                  {
                      headers: {
                          Authorization: `Bearer ${token}`,
                      },
                  }
              );
              if (response.ok) {
                  const data = await response.json();
                  return data;
              }
          }
          } catch (error) {
              console.error('Error fetching search results:', error);
          }
      
    return [];
  };

  const handleSearch = async () => {
    const results = await fetchSearchResults();
    setSearchResults(results);
    setNoResultsSnackbarOpen(results.length === 0);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <TextField
          label="Search TV shows"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <Grid container spacing={3} p={2}>
        {searchResults.map(result => (
          <Grid item xs={12} sm={6} md={4} key={result.show.id}>
            <Card>
              <CardMedia
                component="img"
                alt={result.show.name}
                height="200"
                image={result.show.image ? result.show.image.medium : ''}
              />
              <CardContent>
                <Typography variant="h6">{result.show.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {result.show.summary.replace(/<[^>]+>/g, '')}
                </Typography>
                <Typography variant="body2">
                  Type: {result.show.type}
                </Typography>
                <Typography variant="body2">
                  Language: {result.show.language}
                </Typography>
                <Typography variant="body2">
                  Genres: {result.show.genres.join(', ')}
                </Typography>
                <Typography variant="body2">
                  Status: {result.show.status}
                </Typography>
                <Typography variant="body2">
                  Schedule: {result.show.schedule.time} {result.show.schedule.days.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={noResultsSnackbarOpen}
        message="No results found"
        autoHideDuration={3000}
        onClose={() => setNoResultsSnackbarOpen(false)}
      />
    </div>
  );
}

export default Search;
