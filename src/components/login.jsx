import React from 'react'
import { Form, Image, Input, Button } from 'react-bootstrap';

const login = () => {
    return (
        <div>
            <body className="text-center">
                <main className="form-signin">
                    <Form >
                    <Image className="mb-4 rounded mx-auto d-block" src="../assets/3.png" alt="" width="290" height="70">
                        <h1 className="h3 mb-3 fw-normal">Iniciar sesion</h1>
                        <div className="form-floating">
                            <Input.Group type="email" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="student.email"
                                required>
                            <label for="floatingInput">Correo electronico</label>
                        </div>
                        <div className="form-floating">
                            <Input.Group type="password" className="form-control" id="floatingPassword" placeholder="Password" v-model="student.password"
                                required>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div v-if="alerta" className="alert alert-danger" role="alert">
                            {{ alerta }}
                        </div>
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
