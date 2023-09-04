'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchImage = (href: string) => {
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const fetchImagePreview = async (url: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.microlink.io/api/link-preview?url=${url}`);
      setImagePreview(data.data.image.url);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImagePreview(href);
  }, [href]);

  return { imagePreview, isLoading, error };
};


