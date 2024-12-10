import { Box, CardMedia, CardContent, Typography } from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { colors } from '../../constant/colors'
const ChannelCard = ({video, marginTop}) => {
    
  return (
    <Box sx={{
        width: '320px',
        height: '180px',
        boxShadow: 'none',
        margin: marginTop        
    }}>
        <Link to={`/channel/${video?.snippet?.channelId ? video?.snippet?.channelId : video?.id}`} style={{textDecoration: 'none', textAlign: 'center', color: colors.textWhite}}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', }}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{ width: '200px', height: '180px', borderRadius: '50%' }}
                />
            </CardContent>
            <Typography variant="h6" >
                {video?.snippet?.title}{' '}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
            </Typography>
            <Typography>
                {video?.statistics?.subscriberCount && (
                    <Typography variant="body1" sx={{ opacity: 0.6 }}>
                        {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")} subscribers
                    </Typography>
                )} 
            </Typography>
        </Link>
    </Box>
  )
}

export default ChannelCard