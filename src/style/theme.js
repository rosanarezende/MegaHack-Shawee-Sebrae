import { createMuiTheme } from "@material-ui/core";
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#D12B63',
      contrastText: '#fff'

    },
    secondary: {
      main: "#fff",
      contrastText: '#D12B63',
    }

  }
});