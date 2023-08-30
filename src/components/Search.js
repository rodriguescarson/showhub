import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsSnackbarOpen, setNoResultsSnackbarOpen] = useState(false);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://showhub-backend.vercel.app/api/search?query=${encodeURIComponent(searchQuery)}`,
        {
          headers: {
            Authorization: `Bearer your-secret-key`, // Replace with your actual JWT token
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
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
      <TextField
        label="Search TV shows"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <div>
        {searchResults.map(result => (
          <Card key={result.show.id} style={{ margin: '10px' }}>
            <CardContent>
              <Typography variant="h6">{result.show.name}</Typography>
              <Typography variant="body2">{result.show.summary}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
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
