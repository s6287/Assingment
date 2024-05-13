import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "./GlobalContext";
import chef from "../assets/chef.png";

export default function Hero() {
  return (
    <Box
      display="flex"
      gap={3}
      sx={{ m: "2rem" }}
      flexDirection="row"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Box justifyContent='center' sx={{ width: 'auto', height: "auto" }}>
        <img
          src={chef}
          style={{ width: 'auto', height: "300px" }}
          alt="Chef png"
        />
      </Box>
      <Box display='flex' flexDirection='column' gap={1}>
        <Typography variant="h4" sx={{color:'#333'}}>Hi, I am AI Chef</Typography>
        <Typography variant="h5" sx={{color:'#444'}}>Tell me How can i help you.</Typography>
        <Typography variant="body1" sx={{color:'#555'}}>Whether you're looking for recipes, cooking tips, or culinary inspiration, I'm here to help!</Typography>
        <Typography variant="body1" sx={{color:'#555'}}>Feel free to ask me anything related to cooking, and I'll do my best to provide you with delicious solutions.</Typography>
      </Box>
    </Box>
  );
}
