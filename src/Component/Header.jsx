import { Link } from "react-router-dom"


function Header() {
  return (
    <nav className="navbar navbar-expand-md  mb-4">
  <div className="container">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
      </ul>
        <Link to={"/add/user"} className="btn btn-outline-success" type="submit">Add User</Link>
    </div>
  </div>
</nav>
  )
}

export default Header