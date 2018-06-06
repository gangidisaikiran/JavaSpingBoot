import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange600} from 'material-ui/styles/colors';

export const overlayColor = deepOrange600;
export const secondaryColor = '#BCCB66';
export const mainColor = '#EDAF4B';
export const navbarColor = '#FFF';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: mainColor,
    secondaryColor: secondaryColor,
    accent1Color: secondaryColor
  },
  appBar: {
    height: 70,
    textColor: mainColor
  },
});

export default muiTheme;
