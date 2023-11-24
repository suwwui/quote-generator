import React, { useState } from 'react';
import { Box, Divider, Typography, Icon } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import TwitterIcon from '@mui/icons-material/Twitter';

const RandomQuote = () => {

  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  
  //testing
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  //for new quote
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(select);
  }

  loadQuotes()

  //share
  const twitter = () => {
  const tweetText = `${quote.text} - ${quote.author.split(',')[0]}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  window.open(twitterUrl);
};

  return (
    <>
      <Box
      id="quote-box" 
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "250px",
        background: "#625ac4",
        width: "800px",
        borderRadius: "15px"
      }}>
        <Box 
        id="text"
        sx={{
          width: '2000px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: 1,
        }}>
          <Typography sx={{
            padding: "60px 110px",
            color: "white",
            fontSize: "32px",
            textAlign: "center"
          }}>
            {quote.text}
          </Typography>
        </Box>

        <Divider sx={{ background: "white" }} />

        <Box 
        id="author"
        sx={{
          display: 'flex',
          gap: '20px',
          marginBottom: '10px',
          padding: '20px 30px'
        }}>
          <Box sx={{
            width: '2000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: 1,
          }}>
            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
              {quote.author.split(',')[0]}
              {/* split to remove type.fit text from api */}
            </Typography>

          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: 1,
            
          }}>
            <Box id="new-quote" onClick={() => { random() }} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <RefreshIcon fontSize="large"/>
            </Box>
             <Box id="tweet-quote"  onClick={() => { twitter() }} sx={{ fontSize:'large',display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <TwitterIcon fontSize="large" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>


  );
};

export default RandomQuote;