import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../constant/colors';
import { Videos } from '..';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    const getDate = async() => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items)
        console.log(data);
      } catch (error) {
        console.log(error);    
      }
    }
    getDate()
  }, [id])
  

  return (
    <Box p={2} sx={{height: '90vh', scrollbarWidth: 'none', overflowY: 'auto', backgroundColor: colors.secondary}}>
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} sx={{mb: 2, color: colors.textWhite}}>
          Search results for <span style={{color: colors.textRed}}>{id}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Search