import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({recipe}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://img.lovepik.com/free-png/20211208/lovepik-vegetable-salad-diet-recipe-png-image_401416070_wh1200.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          variant="outlined"
          sx={{
            color: "#ffb74d",
            borderColor: "#ffb74d",
            '&:hover': {
              backgroundColor: "#ffb74d",
              color: '#fff',
            },
          }} // Change color and border color
        >
          View Detail
        </Button>
      </CardActions>
    </Card>
  );
}
