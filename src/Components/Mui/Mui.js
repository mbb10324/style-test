import { Button, Grid, Typography, Modal, TextField, Select, MenuItem, Box, InputLabel, FormGroup, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ferrel from '../../images/Ferrel.gif';
import Mountain from '../../images/Mountain.jpg';
import { useState } from "react";

export default function Mui() {
    const [show, setShow] = useState(false)
    const toggleModal = () => { setShow(!show) }

    const navigate = useNavigate()
    const goNext = () => { navigate('/Tailwind') }
    const goPrev = () => { navigate('/Basic') }

    return (
        <Box sx={{ width: '100%', height: '100%', minHeight: '100vh', backgroundColor: '#181818', color: '#fff', fontFamily: 'PlayfairDisplay-Regular' }}>
            <Typography align="center" sx={{ color: '#d52727', fontFamily: 'PlayfairDisplay-Bold', marginTop: '5vw', fontSize: '6vw', overflow: 'hidden' }}>
                This is a MUI example
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vw', paddingTop: '2vw', overflow: 'hidden' }}>
                <Button onClick={goPrev} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '9vw', height: '2vw', marginRight: '2vw', backgroundColor: '#907163', borderRadius: '3vw', overflow: 'hidden', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#ac93a7', transform: 'scale(1.1)' } }}>
                    Go Prev
                </Button>
                <Button onClick={goNext} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '9vw', height: '2vw', marginLeft: '2vw', backgroundColor: '#907163', borderRadius: '3vw', overflow: 'hidden', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#ac93a7', transform: 'scale(1.1)' } }}>
                    Go Next
                </Button>
            </Box>

            <Box sx={{ marginBottom: '2.5vw' }}>
                <Typography align="center" sx={{ fontSize: '1.2vw', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                    This area demonstrates the FLEX property
                </Typography>
                <Box sx={{ margin: 'auto', width: '80vw', height: '3px', borderRadius: '50%', backgroundColor: '#ac93a7' }}></Box>
                <Grid container justifyContent="space-around" sx={{ marginTop: '2vw', height: '15vw' }}>
                    <Grid item>
                        <Box sx={{ backgroundColor: '#e77272', padding: '1vw', borderRadius: '3vw', overflow: 'hidden' }}>
                            <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2.5vw', color: '#181818', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                                Advantages:
                            </Typography>
                            <List sx={{ height: '9vw', width: '30vw', lineHeight: '1rem', color: '#181818', fontFamily: 'PlayfairDisplay-SemiBold', fontSize: '1vw', overflow: 'hidden' }}>
                                <ListItem>-Large user base.</ListItem>
                                <ListItem>-Pre built components.</ListItem>
                                <ListItem>-Dynamic and responsive.</ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box sx={{ backgroundColor: '#e77272', padding: '1vw', borderRadius: '3vw', overflow: 'hidden' }}>
                            <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2.5vw', color: '#181818', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                                Disadvantages:
                            </Typography>
                            <List sx={{ height: '9vw', width: '30vw', lineHeight: '1rem', color: '#181818', fontFamily: 'PlayfairDisplay-SemiBold', fontSize: '1vw', overflow: 'hidden' }}>
                                <ListItem>-Compile time.</ListItem>
                                <ListItem>-Lacking documentation.</ListItem>
                                <ListItem>-Customizability.</ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: '4vw', marginBottom: '5vw' }}>
                <Typography align="center" sx={{ fontSize: '1.2vw', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                    This area demonstrates the GRID property
                </Typography>
                <Box sx={{ margin: 'auto', width: '80vw', height: '3px', borderRadius: '50%', backgroundColor: '#ac93a7' }}></Box>
                <Grid container alignItems='center' justifyContent='center' sx={{ marginTop: '2vw', height: '15vw' }}>
                    <Grid item>
                        <Box component="img" src={Ferrel} alt="" sx={{ width: '22vw', height: '15vw', borderRadius: '3vw', marginRight: '5vw' }} />
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '15vw', height: '2vw', backgroundColor: '#e77272', border: '1px solid black', borderRadius: '4px', cursor: 'pointer', transition: 'all .2s linear', marginBottom: '1vw', overflow: 'hidden', '&:hover': { backgroundColor: '#d52727' } }}>
                                Clean Button
                            </Button>
                            <Button onClick={toggleModal} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', color: '#181818', width: '8vw', height: '8vw', backgroundColor: '#907163', border: '1px solid black', borderRadius: '50%', cursor: 'pointer', marginBottom: '1vw', transition: 'all .5s cubic-bezier(.79, -1, .37, 2)', '&:hover': { backgroundColor: '#d52727', color: '#fcfcfc', transform: 'scale(1.5)', boxShadow: '0 0 30px #d52727' } }}>
                                Big Dumb Button
                            </Button>
                            <Typography sx={{ fontSize: '1.1vw', fontFamily: 'PlayfairDisplay-Regular' }}>
                                &uarr; Click this one to show you a modal though &uarr;
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box component="img" src={Mountain} alt="" sx={{ width: '22vw', height: '15vw', borderRadius: '3vw', marginLeft: '5vw' }} />
                    </Grid>
                </Grid>
            </Box>

            <Modal open={show} onClose={toggleModal}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '25vw', backgroundColor: '#ac93a7', borderRadius: '3vw', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Typography align="center" sx={{ fontSize: '2.2vw', color: '#181818', marginBottom: '2vw', fontFamily: 'PlayfairDisplay-Regular', overflow: 'hidden' }}>
                        Modal Title
                    </Typography>
                    <FormGroup>
                        <InputLabel sx={{ fontSize: '1vw', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular' }}>
                            Here's a form:
                        </InputLabel>

                        <TextField fullWidth sx={{ marginBottom: '1.5vw', borderRadius: '4px', fontSize: '1vw', '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#d52727' } }} />

                        <InputLabel sx={{ fontSize: '1vw', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular' }}>
                            Idk, type your email:
                        </InputLabel>

                        <TextField fullWidth sx={{ marginBottom: '1.5vw', borderRadius: '4px', fontSize: '1vw', '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#d52727' } }} />

                        <InputLabel sx={{ fontSize: '1vw', marginBottom: '1vw', fontFamily: 'PlayfairDisplay-Regular' }}>
                            Select field for fun:
                        </InputLabel>

                        <Select fullWidth sx={{ marginBottom: '2vw', borderRadius: '4px', fontSize: '1vw', '& .MuiSelect-root.Mui-focused': { borderColor: '#d52727' } }}>
                            <MenuItem value="option 1">option 1</MenuItem>
                            <MenuItem value="option 2">option 2</MenuItem>
                            <MenuItem value="option 3">option 3</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button onClick={toggleModal} sx={{ fontFamily: 'PlayfairDisplay-Bold', fontSize: '1.2vw', marginBottom: '2vw', color: '#181818', width: '12vw', height: '2vw', backgroundColor: '#e77272', border: '1px solid black', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'all .2s linear', '&:hover': { backgroundColor: '#d52727' } }}>
                        Close Modal
                    </Button>
                </Box>
            </Modal>

        </Box>
    )
}