import { Box, Button } from "@mui/material"
import React from "react"
import ModalContent from "../components/ModalContent"
import Modal from '@mui/material/Modal';
import { Height } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

const LandingPage = () => {
    return <Box display={"flex"} justifyContent={"center"} height={"100vh"} alignItems={"center"} overflow={"hidden"}>
        <ModalContent />
    </Box>
}

export default LandingPage