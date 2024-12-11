import { Box, CardMedia, CardContent, Typography } from "@mui/material"
import { CheckCircle, Visibility, VideoCall } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { colors } from '../../constant/colors'
const ChannelCard = ({video, marginTop}) => {
    
  return (
		<Box
			sx={{
				width: { xs: '100%', sm: '358px', md: '320px' },
				boxShadow: 'none',
				margin: marginTop,
			}}
		>
			<Link
				to={`/channel/${
					video?.snippet?.channelId
						? video?.snippet?.channelId
						: video?.id
				}`}
				style={{
					textDecoration: 'none',
					textAlign: 'center',
					color: colors.textWhite,
				}}
			>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 'auto',
					}}
				>
					<CardMedia
						image={video?.snippet?.thumbnails?.high?.url}
						alt={video?.snippet?.title}
						sx={{
							width: '200px',
							height: '200px',
							borderRadius: '50%',
						}}
					/>
				</CardContent>
				<Typography variant='h6'>
					{video?.snippet?.title}{' '}
					<CheckCircle
						sx={{ fontSize: 14, color: 'gray', ml: '5px' }}
					/>
				</Typography>
				<Typography>
					{video?.statistics?.subscriberCount && (
						<Typography variant='body1' sx={{ opacity: 0.6 }}>
							{parseInt(
								video?.statistics?.subscriberCount,
							).toLocaleString('en-US')}{' '}
							subscribers
						</Typography>
					)}
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '10px'}}>
						{video?.statistics?.viewCount && (
							<Typography variant='body1' display={'flex'} alignItems={'center'} gap={'5px'} sx={{ opacity: 0.6 }}>
                                <Visibility />
								{parseInt(
									video?.statistics?.viewCount,
								).toLocaleString('en-US')}{' '}
								views
							</Typography>
						)}
						{video?.statistics?.videoCount && (
							<Typography variant='body1' display={'flex'} alignItems={'center'} gap={'5px'} sx={{ opacity: 0.6 }}>
								<VideoCall />
								{video?.statistics?.videoCount} videos
							</Typography>
						)}
					</Box>
				</Typography>
			</Link>
		</Box>
  );
}

export default ChannelCard