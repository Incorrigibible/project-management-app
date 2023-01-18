import { Box } from "@mui/material";
import React from "react";
import { Title } from "../Titles/Title";

export const SignUp: React.FC = () => {

    return (
        <Box component='form' >
            <Title title={'Зарегистрируйся'} selector={'title'} />
        </Box>
    )
}