import { Stack, Box } from '@mui/material'
import {logo} from '../../constant'
import { colors } from '../../constant/colors'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar'

const Navbar = () => {
  return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p={2}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 100,
				justifyContent: 'space-between',
				backgroundColor: colors.secondSecondary,
			}}
		>
			<Link to={'/'} >
        <img src={logo} alt='Logo' height={40}/>
      </Link>
			<SearchBar />
			<Box sx={{ display: { sm: 'block', xs: 'none' } }}></Box>
		</Stack>
  );
}

export default Navbar