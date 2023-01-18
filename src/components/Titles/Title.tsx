import { Box } from "@mui/material";
import React from "react";
import { title } from "../../types/types";


export const Title:React.FC<title> = ({title,selector}) => {
 return (
    <Box component={'h2'} className={selector}>{title}</Box>
 )
}