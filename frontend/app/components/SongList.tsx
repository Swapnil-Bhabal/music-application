type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
};

const SongList = ({ songs }: { songs: Song[] }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id}>
        {song.title} - {song.artist} ({song.album})
      </li>
    ))}
  </ul>
);

export default SongList;
