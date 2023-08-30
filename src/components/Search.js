// Search.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [noResultsSnackbarOpen, setNoResultsSnackbarOpen] = useState(false);


    const fetchSearchResults = () => {
        return null;
    }
  const handleSearch = async () => {
    // Implement search logic
    const results = await fetchSearchResults(searchQuery);
      setSearchResults(results);
      if (results.length === 0) {
        setNoResultsSnackbarOpen(true);
      }
  };

  return (
    <div>
      <TextField
        label="Search TV shows"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      <div>
        {searchResults.map(result => (
          <div key={result.id}>
            {/* Display result using Material-UI card */}
          </div>
        ))}
          </div>
          <Snackbar
        // Show snackbar for no results
      />

    </div>
  );
}

export default Search;
