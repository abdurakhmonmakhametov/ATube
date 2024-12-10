import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard, Loader } from '../'

const Videos = ({videos}) => {
	console.log(videos);
	
	if (!videos?.length) return <Loader />
	return (
		<Stack
			Width={'100%'}
			direction={'row'}
			flexWrap={'wrap'}
			justifyContent={'start'}
			alignContent={'center'}
			gap={2}
		>
      {videos.map(item => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard video={item}/>}
        </Box>
      ))}
    </Stack>
	);
}

export default Videos