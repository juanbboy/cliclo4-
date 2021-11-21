import './App.css';
import { Form, Image , Container, Row,Col} from 'react-bootstrap';
import React from 'react'
import logo from './3.png';
// import { logo } from './3.png';

const login = () => {
  return (
    <div>
      <body className="text-center">
        <main className="form-signin">
          <Form >
          <img class="mb-4 rounded mx-auto d-block" src={logo} alt="" width="290" height="70"/>   
            <h1 className="h3 mb-3 fw-normal">Iniciar sesion</h1>
            <div className="form-floating">
              <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="student.email"
                required />
              <label for="floatingInput">Correo electronico</label>

            </div>
            <div className="form-floating">
              <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Password" v-model="student.password"
                required />
              <label for="floatingPassword">Password</label>
            </div>
            {/* <div v-if="alerta" className="alert alert-danger" role="alert">
                            {{ alerta }}
                        </div> */}
            <div className="form-group">
              <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy; Universidad Tecnologica de Pereira 2021</p>
          </Form>
        </main>
      </body>
    </div>
  )
}

export default login
