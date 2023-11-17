import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "auto", 
      marginTop: "250px",
      background: "#625ac4",
      width: "800px",
      borderRadius: "15px"
    }}>
      <Typography sx={{
        padding: "60px 110px",
        color: "white",
        fontSize: "32px",
        textAlign: "center"
      }}>
        {quote.text}
      </Typography>
      <Divider sx={{ background: "white" }} />
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "30px 0px"
      }}>
        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
          {quote.author}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "40px", marginLeft: "auto" }}>
          <RefreshIcon />
        </Box>
      </Box>
    </Box>

  );
};

export default RandomQuote;
