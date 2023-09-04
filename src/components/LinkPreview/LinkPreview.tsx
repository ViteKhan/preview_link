'use client'
import { FC, ReactElement } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { TooltipTitle } from '../TooltipTitle';
import { useFetchImage } from './useFetchImage';

export interface LinkPreviewProps {
  children: ReactElement;
  href: string;
}

export const LinkPreview: FC<LinkPreviewProps> = ({ children, href }) => {
  const { imagePreview, error, isLoading } = useFetchImage(href);

  return (
    <Tooltip
      placement={'top'}
      arrow
      title={<TooltipTitle isLoading={isLoading} error={error} imagePreview={imagePreview}/>}
    >
      {children}
    </Tooltip>
  );
};