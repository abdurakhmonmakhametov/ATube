// import React, { useEffect, useState } from 'react'
import {Avatar,Card, CardContent, CardMedia, Typography, Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
// import { ApiService } from '../../service/api.service'

const VideoCard = ({video}) => {
  // const [channelImage, setChannelImage] = useState(null)
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    const units = [
      { name: 'year', seconds: 31536000 },
      { name: 'month', seconds: 2592000 },
      { name: 'week', seconds: 604800 },
      { name: 'day', seconds: 86400 },
      { name: 'hour', seconds: 3600 },
      { name: 'minute', seconds: 60 }
    ];

    for (let unit of units) {
      const count = Math.floor(diffInSeconds / unit.seconds);
      if (count >= 1) {
        return count === 1 ? `1 ${unit.name} ago` : `${count} ${unit.name}s ago`;
      }
    }

    return 'just now';
  }


  // useEffect(() => {
  //   const getData = async() => {
  //     try {
  //       const data = await ApiService.fetching(`channels?part=snippet&id=${video?.snippet?.channelId}`)
  //       setChannelImage(data.items[0])
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   getData()
  // }, [video?.snippet?.channelId])



  return (
    <Link to={`/video/${video.id.videoId}`} style={{textDecoration: 'none'}}>
      <Card sx={{ boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent'}}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ height: '180px', borderRadius: '10px' }}
        />
        <CardContent sx={{position: 'relative', height: '200px'}}>
          
            <Typography my={'5px'} sx={{ opacity: 0.7, color: 'gray' }}>
              {formatTimeAgo(video?.snippet?.publishedAt)}
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 'bold', color: '#fff' }}
            >
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ color: '#fff', opacity: 0.6 }}
            >
              {video?.snippet?.description.slice(0, 60)}
            </Typography>
          <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
              <Avatar src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}/>
              <Typography variant='subtitle2' color={'gray'}>{video?.snippet?.channelTitle}</Typography>
              <CheckCircle sx={{fontSize: '12px', color: 'gray'}}/>
            </Stack>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VideoCard