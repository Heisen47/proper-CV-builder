function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary" >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            {/* <img
              src="./assets/cv-gen.png"
              alt="Logo"
              width="30"
              height="24"
              
            /> */}
            A CV Generator
          </a>
          <div className="btns">
            <button className="btn btn-outline-success mx-2">Register</button>
            <button className="btn btn-outline-success mx-2">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
