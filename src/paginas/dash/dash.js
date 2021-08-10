import React from "react"
import { Grid } from "@material-ui/core"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../assets/img/logoBranco.png';
import Cifrao from "../../assets/img/cifrao.png"
import ListItem from "../../assets/img/ListItem.png"
import { RiAccountCircleFill } from "react-icons/ri"
import { FaListUl } from 'react-icons/fa';
import "./dash.css"
import Chart from "./charts.js"

function Dash() {





    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className="TopBar">
                    <IconButton edge="start" aria-label="menu">
                        <img src={MenuIcon} alt="MenuIcon" className="TopBar-MenuIcon" />
                    </IconButton>
                    {/* <Typography variant="h6" className="TopBar-Title">
                        News
                    </Typography> */}
                    <Button className="TopBar-AcountIcon">
                        <RiAccountCircleFill className="AcountIcon" />
                        {/* <img src={AcountIcon}alt="AcountIcon"/> */}
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container spacing={0}>


                <Grid
                    item xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}

                >
                    <div
                        className="TbRecorrencia">


                        Tabela de recorrencia
                    </div>

                </Grid>

                <Grid item xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                >
                    <div className="TbMensal">
                        <h1 className={'TbCabecalho'}>  Desempenho Mensal</h1>
                        <Chart />
                        <div>
                            <div className="TbCardsTop">
                                <div className="TbCardsTopLf">
                                    <img src={ListItem} alt="ListItem" className="ListItemTop" />
                                    <div>
                                        <p>100%</p>
                                        <p >Taxa de aprovação dos pedidos</p>
                                    </div>


                                </div>

                                <div className="TbCardsTopRgt">
                                    <img src={Cifrao} alt="Cifrao" className="Cifrao" />
                                    <div>
                                        <p>100%</p>
                                        <p >Vendas de Hoje</p>
                                    </div>

                                </div>


                            </div>


                            <div className="TbCardsBot">

                                <div className="TbCardsBotLf">
                                    <img src={ListItem} alt="ListItem" className="ListItem" />

                                    <div>
                                        <p>100%</p>
                                        <p >Total de Vendas De hoje</p>
                                    </div>

                                </div>
                                <div className="TbCardsBotRgt">
                                    <img src={Cifrao} alt="Cifrao" className="Cifrao" />
                                  
                                    <div>
                                        <p>100%</p>
                                        <p >Total de Vendas De hoje(R$)</p>
                                    </div>
                                  
                                  
                                  
                                   <div></div>
                                </div>




                            </div>

                        </div>

                    </div>

                </Grid>

                <Grid item xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                >
                    <div className="TbDiario">

                        <h1 className={'TbCabecalho'}>  Desempenho Diario</h1>
                    </div>

                </Grid>

                <Grid>



                </Grid>



            </Grid>

            <h1>Rodapé</h1>
        </>

    )
}

export default Dash