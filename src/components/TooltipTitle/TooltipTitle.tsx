import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

interface TooltipTitleProps {
  isLoading: boolean;
  error: Error | null;
  imagePreview: string;
}

export const TooltipTitle: FC<TooltipTitleProps> = ({ imagePreview, error, isLoading }) => {
  return (
    <Box sx={{ width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {isLoading && <CircularProgress />}
      {imagePreview && <img src={imagePreview} alt={'preview'} style={{ width: '100%', height: '100%' }} />}
      {error && <Box>{error.message || 'Something went wrong'}</Box>}
    </Box>
  );
};