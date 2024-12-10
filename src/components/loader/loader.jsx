import { Box, Stack, CircularProgress } from "@mui/material"
import { colors } from "../../constant/colors"

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh' }}>
        <Stack>
            <svg width={0} height={0}>
                <defs>
                <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={colors.primary} />
                    <stop offset="100%" stopColor={colors.textRed} />
                </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </Stack>
    </Box>
  )
}

export default Loader