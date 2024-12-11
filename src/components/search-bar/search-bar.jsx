import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constant/colors';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if(value){
			navigate(`/search/${value}`);
		}
	};


	return (
		<Paper
			component={'form'}
			onSubmit={submitHandler}
			sx={{
				border: `1px solid ${colors.primary};`,
				pl: 2,
				boxShadow: 'none',
				background: colors.secondary,
				color: colors.textWhite,
			}}
		>
			<input
				type='text'
				placeholder='Search...'
				className='search-bar'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<IconButton type='submit'>
				<SearchRoundedIcon
					sx={{ color: colors.textWhite }}
				></SearchRoundedIcon>
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
