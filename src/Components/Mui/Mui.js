import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography, Modal, TextField, Select, MenuItem } from "@mui/material";
import Ferrel from '../../images/Ferrel.gif';
import Mountain from '../../images/Mountain.jpg';
import { useState } from "react";

export default function Mui() {
    const [show, setShow] = useState(false)
    const toggleModal = () => { setShow(!show) }

    const navigate = useNavigate()
    const goNext = () => {navigate('/Tailwind')}
    const goPrev = () => {navigate('/Basic')}

    return (
        <div className="basic-container">
            <Typography variant="h1" align="center" sx={{ color: '#d52727', fontFamily: 'PlayfairDisplay-Bold', marginTop: '5vw', fontSize: '6vw', overflow: 'hidden' }}>
                This is a MUI example
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vw', paddingTop: '2vw', overflow: 'hidden' }}>
                <Button variant="contained" onClick={goPrev} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '9vw', height: '2vw', marginRight: '2vw', backgroundColor: '#907163', borderRadius: '3vw', overflow: 'hidden', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#ac93a7', transform: 'scale(1.1)' } }}>
                    Go Prev
                </Button>
                <Button variant="contained" onClick={goNext} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '9vw', height: '2vw', marginLeft: '2vw', backgroundColor: '#907163', borderRadius: '3vw', overflow: 'hidden', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#ac93a7', transform: 'scale(1.1)' } }}>
                    Go Next
                </Button>
            </div>

            <div className="flex-demo-container" style={{ marginBottom: '2.5vw' }}>
                <Typography variant="h2" align="center" sx={{ fontSize: '1.2vw', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                    This area demonstrates the FLEX property
                </Typography>
                <div className="demo-line" style={{ margin: 'auto', width: '80vw', height: '3px', borderRadius: '50%', backgroundColor: '#ac93a7' }}></div>
                    <Grid container className="flex-demo" justifyContent="space-around" sx={{ marginTop: '2vw', height: '15vw' }}>
                        <Grid item>
                            <div className="advantages" style={{ backgroundColor: '#e77272', padding: '1vw', borderRadius: '3vw', overflow: 'hidden' }}>
                                <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2.5vw', color: '#181818', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                                    Advantages:
                                </Typography>
                                <ul style={{ lineHeight: '1.5rem', color: '#181818', fontFamily: 'PlayfairDisplay-SemiBold', fontSize: '1vw' }}>
                                    <li>-One rule apply to many elements.</li>
                                    <li>-Well documented, deep history with endless possibilities.</li>
                                    <li>-Responsive capabilities.</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item>
                            <div className="disadvantages" style={{ backgroundColor: '#e77272', padding: '1vw', borderRadius: '3vw', overflow: 'hidden' }}>
                                <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2.5vw', color: '#181818', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                                    Disadvantages:
                                </Typography>
                                <ul style={{ lineHeight: '1.5rem', color: '#181818', fontFamily: 'PlayfairDisplay-SemiBold', fontSize: '1vw' }}>
                                    <li>-Browser support.</li>
                                    <li>-Dead code.</li>
                                    <li>-Control, change one line could break many things.</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{ marginTop: '4vw', marginBottom: '5vw' }}>
                    <Typography variant="h2" align="center" sx={{ fontSize: '1.2vw', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                        This area demonstrates the GRID property
                    </Typography>
                    <div className="demo-line" style={{ margin: 'auto', width: '80vw', height: '3px', borderRadius: '50%', backgroundColor: '#ac93a7' }}></div>
                        <Grid container alignItems='center' justifyContent='center' sx={{ marginTop: '2vw', height: '15vw' }}>
                            <Grid item>
                                <img src={Ferrel} alt="" style={{ width: '22vw', height: '15vw', borderRadius: '3vw', marginRight: '5vw'  }} />
                            </Grid>
                            <Grid item>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Button variant="contained" className="clean-button" sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '15vw', height: '2vw', backgroundColor: '#e77272', border: '1px solid black', borderRadius: '4px', cursor: 'pointer', transition: 'all .2s linear', marginBottom: '1vw', overflow: 'hidden', '&:hover': { backgroundColor: '#d52727' } }}>
                                        Clean Button
                                    </Button>
                                    <Button variant="contained" className="dumb-button" onClick={toggleModal} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '8vw', height: '8vw', backgroundColor: '#907163', border: '1px solid black', borderRadius: '50%', cursor: 'pointer', marginBottom: '1vw', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#d52727', color: '#fcfcfc', transform: 'scale(1.5)', boxShadow: '0 0 30px #d52727' } }}>
                                        Big Dumb Button
                                    </Button>
                                    <Typography variant="body1" sx={{ fontSize: '1.1vw' }}>
                                        &uarr; Click this one to show you a modal though &uarr;
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item>
                                <img src={Mountain} alt="" style={{ width: '22vw', height: '15vw', borderRadius: '3vw', marginLeft: '5vw' }} />
                            </Grid>
                        </Grid>
            </div>

            <Modal open={show} onClose={toggleModal}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '40vw', height: '40vh', backgroundColor: '#181818', borderRadius: '3vw', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <Typography variant="h4" align="center" sx={{ fontSize: '2.2vw', color: '#FFF', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
      Modal Title
    </Typography>
    <Typography variant="body1" align="center" sx={{ fontSize: '1.4vw', color: '#FFF', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular' }}>
      This is a modal dialog box. It is used to display additional content or information on top of the current page.
    </Typography>
    <Button variant="contained" onClick={toggleModal} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '12vw', height: '2vw', backgroundColor: '#e77272', border: '1px solid black', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'all .2s linear', '&:hover': { backgroundColor: '#d52727' } }}>
      Close Modal
    </Button>
  </div>
</Modal>

        </div>
    )
}