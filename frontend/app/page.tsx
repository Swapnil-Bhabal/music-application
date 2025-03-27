"use client";
import { useEffect, useState } from "react";
// import { api } from '@/services/api';

import SongList from "./components/SongList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    // const res = await api.get('/songs');
    // setSongs(res.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Music Library</h1>
      <SearchBar setSongs={setSongs} />
      <SongList songs={songs} />
    </div>
  );
}
