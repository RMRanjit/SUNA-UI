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
  IconSettings,
  IconQuestionMark,
  IconLock,
  IconChartHistogram,
  IconAffiliate,
  IconBrandGoogle,
  IconBrandAmazon,
  IconBrandWindows,
  IconBuildingBroadcastTower,
  IconDeviceMobile,
  IconBrowser,
  Icon3dCubeSphere,
  IconTools,
  IconBrain,
  IconVideo,
  IconInfinity,
  IconCloudComputing,
  IconGeometry
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
  // console.log('type sent is', type, typeof type);

  backgroundColor = '#66c0f4'; //'	#f6993f';
  color = '#ffffff';
  borderColor = backgroundColor;

  switch (type === undefined ? '' : type.toString().toUpperCase()) {
    case 'CPU':
    case 'COMPUTE':
    case 'VIRTUAL DESKTOP INFRASTRUCTURE':
    case 'END-USER COMPUTING (EUC)':
      icon = <IconCpu stroke={1.5} size="1.3rem" />;
      backgroundColor = '#66c0f4'; //'	#f6993f';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'IDENTITY':
    case 'SECURITY':
    case 'SECURITY AND IDENTITY':
    case 'SECURITY, IDENTITY, & COMPLIANCE':
      icon = <IconLock stroke={1.5} size="1.3rem" />;
      backgroundColor = '#66c0f4'; //'	#f6993f';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'ANALYTICS':
    case 'DATA ANALYTICS':
      icon = <IconChartHistogram stroke={1.5} size="1.3rem" />;
      break;
    case 'NETWORKING':
    case 'INTEGRATION':
    case 'APPLICATION INTEGRATION':
      icon = <IconAffiliate stroke={1} size="1.3rem" />;
      break;
    case 'INTERNET OF THINGS':
    case 'INTERNET OF THINGS (IOT)':
    case 'IOT':
      icon = <IconBuildingBroadcastTower stroke={1.5} size="1.3rem" />;
      break;

    case 'STORAGE':
      icon = <IconFolder stroke={1.5} size="1.3rem" />;
      backgroundColor = '#6574cd';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'DATABASE':
    case 'DATABASES':
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
    case 'SERVERLESS COMPUTING':
    case 'SERVERLESS':
      icon = <IconMathFunction stroke={1.5} size="1.3rem" />;
      backgroundColor = '#8592c4'; //'#2a475e'; //'#4dc0b5';
      color = '#ffffff';
      borderColor = backgroundColor;
      break;
    case 'BATCH':
      icon = <IconSettings stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#FFFFFF';
      borderColor = backgroundColor;
      break;
    case 'WEB':
    case 'WEB3':
      icon = <IconBrowser stroke={1.5} size="1.3rem" />;
      break;
    case 'CONTAINERS':
      icon = <Icon3dCubeSphere stroke={1.5} size="1.3rem" />;
      break;

    case 'REALTIME':
    case 'API':
    case 'API MANAGEMENT':
      icon = <IconApi stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#FFFFFF';
      borderColor = backgroundColor;
      break;
    case 'MOBILE':
    case 'FRONT-END WEB & MOBILE':
      icon = <IconDeviceMobile stroke={0.8} size="1.8rem" />;
      break;
    case 'MEDIA':
    case 'MEDIA AND GAMING':
    case 'MEDIA SERVICES':
    case 'GAME TECH':
    case 'MIXED REALITY':
      icon = <IconVideo stroke={0.8} size="1.8rem" />;
      break;
    case 'DEVELOPER TOOLS':
      icon = <IconTools stroke={0.8} size="1.8rem" />;
      break;
    case 'DEVOPS':
      icon = <IconInfinity stroke={0.8} size="1.8rem" />;
      break;
    case 'AI':
    case 'AI + MACHINE LEARNING':
    case 'AI AND MACHINE LEARNING':
    case 'MACHINE LEARNING & AI':
    case 'ROBOTICS':
      icon = <IconBrain stroke={0.8} size="1.8rem" />;
      break;
    case 'AZURE':
      icon = <IconBrandWindows stroke={0.8} size="2rem" />;
      break;
    case 'AWS':
      icon = <IconBrandAmazon stroke={1.5} size="1.3rem" />;
      backgroundColor = '#FF8822';
      borderColor = backgroundColor;
      break;
    case 'GCP':
    case 'GOOGLE':
      icon = <IconBrandGoogle stroke={1.5} size="1.3rem" />;
      break;
    case 'HYBRID + MULTICLOUD':
    case 'HYBRID AND MULTICLOUD':
      icon = <IconCloudComputing stroke={1.5} size="1.3rem" />;
      break;
    case 'MANAGEMENT AND GOVERNANCE':
    case 'MANAGEMENT & GOVERNANCE':
    case 'MANAGEMENT TOOLS':
      icon = <IconGeometry stroke={1.5} size="1.3rem" />;
      break;
    default:
      icon = <IconQuestionMark stroke={1.5} size="1.3rem" />;
      backgroundColor = '#3490dc';
      color = '#FFFFFF';
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
