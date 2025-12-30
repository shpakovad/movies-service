import { ThemeConfig } from 'antd';

const VIOLET = '#8919fa';
const BLACK = '#000000ff';

export const theme: ThemeConfig = {
  token: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    Pagination: {
      borderRadius: 20,
      colorPrimary: VIOLET,
      colorLink: BLACK,
      colorLinkActive: VIOLET,
      colorPrimaryHover: VIOLET,
    },
    Button: {
      defaultHoverBorderColor: 'none',
    },
  },
};
