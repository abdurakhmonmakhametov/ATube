import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import { Box, Chip, Typography, Stack, Avatar } from '@mui/material';
import { colors } from '../../constant/colors';
import { Loader, Videos } from '../';
import ReactPlayer from 'react-player';
import '../index.css';
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [relatedVideo, setRelatedVideo] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`videos?part=snippet,statistics&id=${id}`,
				);

				const relatedData = await ApiService.fetching(
					`search?part=snippet&relatedToVideoId=${id}&type=video`
				)
				setRelatedVideo(relatedData.items)			
				setVideoDetail(data.items[0]);				
				
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [id]);

	if (!videoDetail) return <Loader />;

	const {
		snippet: {
			title,
			channelId,
			channelTitle,
			description,
			tags,
			thumbnails,
		},
		statistics: { viewCount, likeCount, commentCount },
	} = videoDetail;

	console.log(relatedVideo);
	

	const textToLink = (d) => {
		if (!description) return null;
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		return d.replace(urlRegex, (url) => {
			return `<a href="${url}" target="_blank">${url}</a>`;
		});
	};

	return (
		<Box
			p={2}
			sx={{
				height: '90vh',
				scrollbarWidth: 'none',
				overflowY: 'auto',
				backgroundColor: colors.secondary,
			}}
		>
			<Box display={'flex'} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
				<Box width={{xs: '100%', md: '75%'}}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className='react-player'
						controls
					/>
					<Typography
						variant='h5'
						fontWeight='bold'
						p={2}
						sx={{ color: colors.textWhite }}
					>
						{title}
					</Typography>
					<Typography
						variant='subtitle2'
						p={2}
						sx={{ color: colors.textWhite, opacity: 0.7 }}
						dangerouslySetInnerHTML={{
							__html: textToLink(description),
						}}
					></Typography>
					<Stack direction={'row'} gap={'20px'} alignItems={'center'} py={1} px={2} sx={{color: colors.textWhite}}>
						<Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
							<Visibility />
							{parseInt(viewCount).toLocaleString()} views
						</Stack>
						<Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
							<FavoriteOutlined />
							{parseInt(likeCount).toLocaleString()} likes
						</Stack>
						<Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
							<MarkChatRead />
							{parseInt(commentCount).toLocaleString()} comments
						</Stack>
					</Stack>
					
					<Link to={`/channel/${channelId}`} style={{textDecoration: 'none', textAlign: 'center'}}>
						<Stack direction={'row'} py={1} px={2}>
							<Stack direction={'row'} alignItems={'center'} gap={'5px'} marginTop={'5px'}>
								<Avatar 
									alt={channelTitle}
									src={thumbnails.medium.url}
								/>
								<Typography variant='subtitle2' color='gray'>
									{channelTitle}
									<CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px' }}/>
								</Typography>
							</Stack>
						</Stack>
					</Link>

					{tags?.map((item, idx) => (
						<Chip
							label={item}
							key={idx}
							sx={{
								marginTop: '10px',
								cursor: 'pointer',
								ml: '10px',
								color: colors.textWhite,
							}}
							deleteIcon={
								<Tag style={{ color: colors.textWhite }} />
							}
							onDelete={() => {}}
							variant='outlined'
						/>
					))}
				</Box>
				<Box width={{xs: '100%', md: '25%'}}
					px={2}
					py={{md: 1, xs: 5}}
					justifyContent={'center'}
					alignItems={'center'}
					overflow={'scroll'}
					maxHeight={'100vh'}
					sx={{
						height: '90vh',
						scrollbarWidth: 'none',
						backgroundColor: colors.secondary,
					  }}
				>
					<Videos videos={relatedVideo}/>
				</Box>
			</Box>
		</Box>
	);
};

export default VideoDetail;
