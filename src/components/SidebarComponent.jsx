import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/actions";

const SidebarComponent = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getData(query));
  };

  return (
    <>
      <nav className="navbar navbar-expand-md side-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-center">
          <a className="navbar-brand" href="index.html">
            <img src="logo.png" alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul id="ul" style={{ padding: "0" }}>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#s">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#s">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form className="input-group mt-3" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={query}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn d-flex flex-column align-items-center">
          <button id="signup-btn" className="btn" type="button">
            Sign Up
          </button>
          <button id="login-btn" className="btn" type="button">
            Login
          </button>
          <div className="d-flex gap-2">
            <a href="#s">Cookie</a> | <a href="#s">Policy</a> | <a href="#s"> Privacy</a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default SidebarComponent;
