import { Nav, Navbar, Container,Button } from 'react-bootstrap';
const App = () => {
  return (
    <div>
      <header className="site-header sticky-top py-1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <Nav.Link className="py-2" href="#" aria-label="Product">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
              </Nav.Link>
            </Button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarText">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <Nav.Link className="nav-link" >
                  <router-link to="/">Inicio</router-link>
                </Nav.Link>
                <Nav.Link className="nav-link padding-15px" >
                  <router-link to="/login">Entrar</router-link>
                </Nav.Link>
                <Nav.Link className="nav-link" >
                  <router-link to="/create">Registrarse</router-link>
                </Nav.Link>
                <Nav.Link className="nav-link" >
                  <router-link to="/view">Lista de empleados</router-link>
                </Nav.Link>
                <Nav.Link className="nav-link" >
                  <router-link to="/horarios">Horarios</router-link>
                </Nav.Link>
                <Nav.Link className="nav-link" >
                  <router-link to="/cartelera">Cartelera</router-link>
                </Nav.Link>
                <Nav.Link className="py-1 d-md-inline-block" >
                  <Button onClick="cerrar" className="btn btn-dark">Salir</Button>
                </Nav.Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Router view --> */}
      <div className="container mt-5">
        <router-view></router-view>
      </div>
    </div>
  )
}


export default App;
