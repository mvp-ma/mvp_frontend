import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    type: 'light',
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});

export default theme;
