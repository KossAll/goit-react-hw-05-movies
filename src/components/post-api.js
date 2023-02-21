import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',

  params: {
    image_type: 'photo',
    key: '32179621-cf91ad613e10269e9e97461b0',
  },
});

export const fetchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
      per_page: 12,
    },
  });
  return data;
};
