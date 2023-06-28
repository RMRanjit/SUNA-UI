import {
  IconBrandTabler,
  IconCpu,
  IconFolder,
  IconDatabase,
  IconMessage,
  IconMathFunction,
  IconMailFast,
  IconApi,
  IconLambda,
  IconSettings
} from '@tabler/icons';
import { Avatar } from '@mui/material';
/*to be removed after the back end is implemented */
import { simpleBlueprint, MicroServices, Datawarehouse, PreCDP } from '../assets/Blueprint/simpleBlueprint';
/*to be removed after the back end is implemented */

export const currencyFormat = (value) => {
  //console.log('General utitity:currencyFormat', value);
  return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

export const displayIcon = (type) => {
  let icon, backgroundColor, color, borderColor;
  // Palette from https://colorswall.com/palette/171300
  // https://colorswall.com/palette/193 - blue color pallette
  switch (type.toUpperCase()) {
    case 'CPU':
    case 'COMPUTE':
      icon = <IconCpu stroke={1.5} size="1.3rem" />;
      backgroundColor = '#66c0f4'; //'	#f6993f';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'STORAGE':
      icon = <IconFolder stroke={1.5} size="1.3rem" />;
      backgroundColor = '#6574cd';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'DATABASE':
      icon = <IconDatabase stroke={1.5} size="1.3rem" />;
      backgroundColor = '	#3490dc';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'MESSAGEQUEUE':
      icon = <IconMessage stroke={1.5} size="1.3rem" />;
      backgroundColor = '#c7d5e0'; //'#9bddb1';
      color = '#000000';
      borderColor = backgroundColor;
      break;
    case 'FUNCTION':
      icon = <IconMathFunction stroke={1.5} size="1.3rem" />;
      backgroundColor = '#8592c4'; //'#2a475e'; //'#4dc0b5';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'batch':
    case 'BATCH':
      icon = <IconSettings stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#000000';
      borderColor = backgroundColor;
      break;

    case 'REALTIME':
    case 'API':
      icon = <IconApi stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#000000';
      borderColor = backgroundColor;
      break;

    default:
      icon = <IconCpu stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#000000';
      borderColor = backgroundColor;
      break;
  }

  return (
    <Avatar
      sx={{
        color: color,
        backgroundColor: backgroundColor,
        border: 'solid',
        borderColor: borderColor,
        marginRight: '.2em'
      }}
      //style={{ width: 40, height: 40, marginRight: theme.spacing(1) }}
      //variant="circular"
    >
      {icon}
    </Avatar>
  );
};

export const blueprintValues = (Name) => {
  switch (Name) {
    case 'Web Development':
      return simpleBlueprint;
    case 'Microservices':
      return MicroServices;
    case 'Datawarehouse':
      return Datawarehouse;
    case 'PreCDP':
    case 'Pre-CDP':
      return PreCDP;
    default:
      return { nodes: [], edges: [] };
  }
};
