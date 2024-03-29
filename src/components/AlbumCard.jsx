import { useDispatch } from "react-redux";
import { getCurrentSong } from "../redux/actions";

const AlbumCard = ({ songInfo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="col text-center"
      onClick={() => {
        dispatch(getCurrentSong(songInfo));
      }}
    >
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p>
        Track: {songInfo.title.length < 16 ? songInfo.title : songInfo.title.substring(0, 16) + "..."} <br />
        Artist: {songInfo.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
