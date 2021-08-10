/* eslint-disable no-cond-assign */
import React from "react";
import "./login.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Logo from "../../assets/img/logoLogin.png"
// import Imgbg from "../../assets/img/bgImg.jpg"
//import EmailIcon from '@material-ui/icons/Email';
import EmailIcon from "../../assets/img/mail.png"
import CadeadoIcon from "../../assets/img/cadeado.png"
//import axios from "axios";
import { history } from "../../history"




const Login = () => {
    // https://sistema.trackcash.com.br/api/auth/payments?&date_start=01-08-2021&date_end=31-08-2021&data_type=data_repasse&stores=2
    //const token = 'dGVzdGVAaW50ZWdyYWRvci5jb20uYnI6bXVkYXIhQCM='
    const token = { email: "teste@integrador.com.br", password: "mudar!@#" }
    const handleSubmit = values => {
        console.log(values)
        // axios.post(`https://sistema.trackcash.com.br/payments#autentica%C3%A7%C3%A3o`,values)
        // .then(resp=> {
        // console.log(data)
        const token = values
        //  console.log(token)
        if (token === values) {
            localStorage.setItem('app-token', token)
            history.push("/dash")
        } else {
            return alert("Insira um email e uma senha valida ")
        }
        //     }

        // )
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    })
    return (
        <>
            <div className="Login" >

                <div className="Login-L">
                    <div className="Login-Logo" >
                        <img src={Logo} alt={"Logo"} />
                    </div>
                    <h1 className="Flogin">Fazer login no TrackCash:</h1>

                    <Formik
                        initialValues={{}}
                        onSubmit={handleSubmit}
                        validationSchema={validations}
                    >
                        <Form>
                            <div
                                className="Login-Group"
                            >
                                <div className="IconEmail">
                                    <Field
                                        className="Login-Field"
                                        name="email"
                                        placeholder="trackcrash@email.com"
                                    />
                                    <img src={EmailIcon} alt="EmailIcon" className="IconEmail-Icon" />
                         
                                </div>
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="Login-Error"
                                />

                            </div>

                            <div
                                className="Login-Group"
                            >
                                <Field
                                    className="Login-Field"
                                    name="password"
                                    type="password"
                                    id="myPassword"
                                />
                               <img src={CadeadoIcon} alt="Cadeado" className="Cadeado-Icon" />
                         
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="Login-Error"
                                  
                                />
                            </div>

                            <button className="Login-Btn">Acessar Sistema</button>
                        </Form>
                    </Formik>
                </div>
                <div className="BackGroundImg">
                    {/* <img src={Imgbg} alt="Imgbg" /> */}
                    <div className="container">
                        <h2 className="subT">Muito mais que um conciliador financeiro!</h2>
                        <div className="Descripition">
                            <p>A melhor ferramenta no mercado e a única com processo automatizado, que compara as informações entre Plataformas, MarketPlaces, Transportadoras, Meios de Pagamento e Instituições Financeiras!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login
