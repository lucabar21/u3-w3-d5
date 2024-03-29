import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

const AudiobarComponent = () => {
  const selectedSong = useSelector((state) => state.current.data);

  return (
    <Row className="h-100">
      <audio controls>
        <source src={selectedSong.preview} type="audio/mpeg" />
      </audio>
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
              <a href="#s">
                <img src="play.png" alt="play" />
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
