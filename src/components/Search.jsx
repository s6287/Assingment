import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useGlobalContext } from './GlobalContext';

// Custom styled TextField with outline color #ffb74d and label color #ffb74d
const CustomTextField = styled(TextField)({
  maxWidth: "400px", // Set maximum width to 400px
  width: "100%", // Take up available width
  "& .MuiInputLabel-root": {
    color: "#ffb74d",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffb74d",
    },
    "&:hover fieldset": {
      borderColor: "#ffb74d",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffb74d", // Focused outline color
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#ffb74d", // Set helper text color to label color
  },
});

// Custom styled Button with background color #ffb74d and text color #fff
const CustomButton = styled(Button)({
  backgroundColor: "#ffb74d",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ff9800", // Change hover color if desired
  },
});

// Styled Box for the loading spinner
const LoadingSpinner = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex:999
});

export default function Search() {
  const { setRecipies } = useGlobalContext();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true); // Set loading to true when fetching begins
      const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${input}`, {
        headers: {
          'X-Api-Key': 'AqX7SwMU6yYDxfBiom5sYA==EilMp0YzbwIdv5jv', // Replace 'YOUR_API_KEY' with your actual API key
        },
      });
      if (response.ok) {
        const data = await response.json();
        setRecipies(data); 
        setSearched(true);
      } else {
        console.error("Failed to fetch recipes");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching completes
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      component="section"
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={2}
      p={2}
    >
      <Typography variant="h3" sx={{ fontWeight: "800", color: "#333" }}>
        AI Recipe Generator
      </Typography>
      <Typography variant="h5" sx={{ color: "#444" }}>
        Not sure what to cook?
      </Typography>
      <Box width="100%" display="flex" gap={3} justifyContent="center">
        {/* Set the Box width to 100% to allow TextField to take available width */}
        <CustomTextField
          id="outlined-basic"
          label="Enter keyword to generate"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: "custom-label",
              focused: "custom-focused",
            },
          }}
          value={input}
          onChange={handleInputChange}
        />
        <CustomButton variant="outlined" onClick={handleGenerate}>Generate</CustomButton>
      </Box>
      {/* Conditional rendering of the loading spinner */}
      {loading && (
        <LoadingSpinner>
          <img src="https://cdn.dribbble.com/users/1515327/screenshots/4328124/cooking_loader_2.gif" alt="Loading" />
        </LoadingSpinner>
      )}
    </Box>
  );
}
