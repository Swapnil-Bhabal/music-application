// import { api } from '@/services/api';
import { useState } from 'react';

const SearchBar = ({ setSongs }: { setSongs: Function }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    // const res = await api.get(`/songs/search?q=${query}`);
    // setSongs(res.data);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
