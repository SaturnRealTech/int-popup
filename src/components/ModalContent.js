import { Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import map from "../assets/images/map.jpg"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import Crop54Icon from '@mui/icons-material/Crop54';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./style.css"

const ModalContent = () => {

    return <Box height={"100%"}  >
        <Grid container width="100%" height={"100%"} spacing={2} p={3} overflow={"scroll"}>
            <Grid item xs={12} md={6} height={"100%"}   >
                <Grid xs={12} xl={6} height={"70%"}  >
                    <img style={{ width: "100%", height: "100%" }} src={image1} />
                </Grid>

                <Grid height={"30%"} xs={12} xl={6} container  justifyContent={"space-between"} className="image" >
                    <Grid item xs={4} pr={1}>
                        <img style={{ width: "100%", height: "100%" }} src={image2} />
                    </Grid>
                    <Grid item xs={4} pt={1}>
                        <img style={{ width: "100%", height: "100%" }} src={image3} />
                    </Grid>
                    <Grid item xs={4} pl={1} pt={1}>
                        <img style={{ width: "100%", height: "100%" }} src={image1} />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} md={6} spacing={2}   position={"relative"}  >
                <Grid item xs={12} xl={6}>
                    <Typography> Tangled Up In Green</Typography>
                </Grid>
                <Grid item xs={12} xl={6}>
                    <Typography> Tangled Up In Green</Typography>
                </Grid>
                <Grid item xs={12} xl={6}>
                    <p style={{ fontSize: 10 }}> Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.</p>
                </Grid>
                <hr />

                <Grid container xs={12} xl={6} flex={1} overflow={"hidden"} height={"65%"}  >
                    <Grid item xs={12} md={7} spacing={2}>
                        <Grid container item xs={12} >
                            <Grid item xs={4} container >
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} > <CurrencyRupeeIcon sx={{ color: "#AC8038" }} /> 1.4 Cr </Box>
                                    <Box fontSize={12}>(6990 / Sq Ft)</Box>
                                </Box>

                            </Grid>

                            <Grid item xs={4} container alignItems={"center"} gap={2}>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} >  <PhotoSizeSelectLargeIcon sx={{ color: "#AC8038" }} /> Plot Size</Box>
                                    <Box fontSize={12}>1800 to 7200 Sq Ft</Box>
                                </Box>

                            </Grid>

                            <Grid item xs={4} container alignItems={"center"} gap={2}>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} > <Crop54Icon sx={{ color: "#AC8038" }} /> Area</Box>
                                    <Box fontSize={12}>115 Acres</Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} > <hr /></Grid>


                        <Grid container item xs={12} >
                            <Grid item xs={4}>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} >
                                        Total Units
                                    </Box>
                                    <Box fontSize={12}>968</Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} >
                                        Project Type
                                    </Box>
                                    <Box fontSize={12}>Plotted Development</Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box display={"flex"} flexDirection={"column"} gap={1}>
                                    <Box display={"flex"} alignItems={"center"} gap={2} >
                                        Status
                                    </Box>
                                    <Box fontSize={12}>Newly Launched</Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} > <hr /></Grid>


                        <Grid container item xs={12} spacing={2}  >
                            <Grid item xs={12}><Typography>30 + Amenties</Typography></Grid>

                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>
                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>
                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>
                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>
                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>
                            <Grid item xs={6} container alignItems={"center"} gap={2}>
                                <MenuBookIcon sx={{ color: "#AC8038" }} fontSize="10" /> Children's
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container item xs={12} md={5}>
                        <img src={map} style={{ width: "100%", height: "100%" }} />
                    </Grid>
                </Grid>


                <Grid container mt={3}  spacing={1} position={"sticky"} bottom={0} backgroundColor="white" >
                    <Grid item xs={4} container justifyContent={"flex-end"}><Button sx={{ color: "#AC8038", width: "100%" }} variant="outlined">Chat Now</Button></Grid>
                    <Grid item xs={4} container justifyContent={"center"}><Button sx={{ color: "#AC8038", width: "100%" }} variant="outlined">Call Now</Button></Grid>
                    <Grid item xs={4} container justifyContent={"flex-start"}><Button sx={{ background: "#AC8038", width: "100%" }} variant="contained"> Site Visit</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box >
}

export default ModalContent