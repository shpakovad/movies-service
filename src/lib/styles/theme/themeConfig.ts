import { ThemeConfig } from 'antd';

const VIOLET = '#8919fa';

export const theme: ThemeConfig = {
  token: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    Pagination: {
      borderRadius: 20,
      itemActiveColor: VIOLET,
      itemActiveColorHover: VIOLET,
    },
  },
};
