import { Movie } from '@/types/movie.interface';

export const generateColumns = (count: number) => {
  return new Array(count).fill(0).map((_, i) => {
    const key: string = i.toString();
    return {
      key,
      width: 200,
    };
  });
};

export const chunkArray = (data: Array<Movie>, chunkSize: number) => {
  if (chunkSize <= 0) {
    return [];
  }

  let result = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
};
