import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col } from "react-bootstrap";

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
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex justify-content-center align-items-center">
          {!selectedSong ? (
            <></>
          ) : (
            <>
              <audio id="audio-player" src={selectedSong.preview} onPlay={handlePlay} onPause={handlePause}></audio>
              <Col className="col-3 d-flex gap-3">
                <img style={{ borderRadius: "5" }} src={selectedSong.album.cover_small} alt="cover" />
                <div className="d-flex flex-column" style={{ color: "white" }}>
                  <span>{selectedSong.title}</span>
                  <span>{selectedSong.artist.name}</span>
                </div>
              </Col>
            </>
          )}
          <div className="col-4 playerControls">
            <div className="d-flex">
              <a href="#s">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="#s">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="#s" onClick={playingSong}>
                {isPlaying ? <img src="pause.svg" alt="pause" /> : <img src="play.svg" alt="play" />}
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
          <Col className="col-3"></Col>
        </div>
      </div>
    </Row>
  );
};
export default AudiobarComponent;
