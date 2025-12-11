import { ThemeConfig } from 'antd';

const FUCHSIA = '#fa2e93';
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
