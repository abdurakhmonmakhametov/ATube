import {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {ApiService} from '../../service/api.service'
import { Box, Container } from '@mui/material'
import { ChannelCard } from '../'
import { colors } from '../../constant/colors'
import { Videos } from '../'

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async() => {
      try {
        const data = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(data.items[0])
        console.log(data);
        const dataVideos = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`)
        console.log(dataVideos);
        setVideos(dataVideos?.items)
      } catch (err) {
        console.log(err);
      }
    }

    getData()
  }, [id])


  return (
    <Box minHeight={'90vh'} sx={{background: colors.secondary}}>
      <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Box width={'100%'} height={'200px'} sx={{backgroundImage: `url(${channelDetail.brandingSettings?.image.bannerExternalUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></Box>
        <ChannelCard video={channelDetail} marginTop={'-100px'}/>
      </Box>
      <Container maxWidth={'90%'} sx={{marginTop: '220px'}}>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel