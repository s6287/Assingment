import { Box, Typography } from "@mui/material";
import MultiActionAreaCard from "./RecipeCard";
import { useGlobalContext } from "./GlobalContext";
import Hero from "./Hero";
import AccordionExpandIcon from "./RecipeAccordian";
import CustomizedAccordions from "./RecipeAccordian";

export default function Container() {
  const { Recipies } = useGlobalContext();
  return (
    <Box
      display='flex'
      sx={{ m: "2rem"}}
      justifyContent="center" 
    >
      <Box display="flex"
      flexDirection='column'
      gap={1}
      sx={{ width: "80%"}}
      >
        {Recipies.length === 0 ? (
          <Hero />
        ) : (
          <>
            <Typography sx={{my:'1rem', color:'#333', textAlign:'center'}} variant="h5">HERE IS WHAT I HAVE FOR YOU</Typography>
            {Recipies.map((recipe) => (
              <CustomizedAccordions recipe={recipe} key={recipe.title} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}
