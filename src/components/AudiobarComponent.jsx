import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { useState } from "react";

const AudiobarComponent = () => {
  const selectedSong = useSelector((state) => state.current.data);

  const [isPlaying, setIsPlaying] = useState(false);

  const playingSong = () => {
    const audio = document.getElementById("audio-player");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(!true);
  };

  return (
    <Row className="h-100">
      <audio id="audio-player" src={selectedSong.preview} onPlay={handlePlay} onPause={handlePause}></audio>
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex-column justify-content-center align-items-center">
          <div className="col-6 col-md-4 playerControls">
            <div className="d-flex">
              <a href="#s">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="#s">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="#s" onClick={playingSong}>
                {isPlaying ? <img src="pause.svg" alt="pause" /> : <img src="play.svg" alt="play" />}{" "}
              </a>
              <a href="#s">
                <img src="next.png" alt="next" />
              </a>
              <a href="#s">
                <img src="repeat.png" alt="repeat" />
              </a>
            </div>
            <div id="progress" className="mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default AudiobarComponent;
