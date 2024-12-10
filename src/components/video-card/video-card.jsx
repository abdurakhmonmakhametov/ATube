import {Avatar,Card, CardContent, CardMedia, Typography, Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const VideoCard = ({video}) => {
  return (
	<Link to={`/video/${video.id.videoId}`} style={{textDecoration: 'none'}}>
		<Card sx={{ width: '320px', boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent'}}>
			<CardMedia
				image={video?.snippet?.thumbnails?.high?.url}
				alt={video?.snippet?.title}
				sx={{ width: '360px', height: '180px' }}
			/>
			<CardContent sx={{position: 'relative', height: '200px'}}>
				
					<Typography my={'5px'} sx={{ opacity: 0.7, color: 'gray' }}>
						{moment(video?.snippet?.publishedAt).fromNow()}
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