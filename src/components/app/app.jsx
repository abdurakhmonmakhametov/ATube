import {Box} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import {Main, Channel, VideoDetail, Search} from '../'
import Navbar from '../navbar/navbar';

const App = () => {
    return <Box>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/channel/:id' element={<Channel/>}></Route>
            <Route path='/video/:id' element={<VideoDetail/>}></Route>
            <Route path='/search/:id' element={<Search/>}></Route>
        </Routes>
    </Box>
}

export default App