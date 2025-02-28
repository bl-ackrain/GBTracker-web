import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import {
  IconButton, Tooltip, Avatar, ListItemAvatar, ListItemText, ListItemButton,
  Divider,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Battery60Icon from '@mui/icons-material/Battery60';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import Battery20Icon from '@mui/icons-material/Battery20';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import ErrorIcon from '@mui/icons-material/Error';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { devicesActions } from '../store';
import {
  formatAlarm, formatBoolean, formatPercentage, formatStatus, getStatusColor,
} from '../common/util/formatter';
import { useTranslation } from '../common/components/LocalizationProvider';
import { mapIconKey, mapIcons } from '../map/core/preloadImages';
import { useAdministrator } from '../common/util/permissions';
import EngineIcon from '../resources/images/data/engine.svg?react';
import { useAttributePreference } from '../common/util/preferences';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import SpeedIcon from '@mui/icons-material/Speed';

dayjs.extend(relativeTime);

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '30px',
    height: '30px',
    filter: 'brightness(0) invert(1)',
  },
  batteryText: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
    lineHeight: '0.875rem',
  },
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  neutral: {
    color: theme.palette.neutral.main,
  },
}));

const DeviceRow = ({ data, index, style }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const t = useTranslation();

  const admin = useAdministrator();

  const item = data[index];
  //console.log('Device [',index, ']:', item)
  const position = useSelector((state) => state.session.positions[item.id]);
  //console.log('Device [',index, ']:', position)
  const devicePrimary = useAttributePreference('devicePrimary', 'name');
  const deviceSecondary = useAttributePreference('deviceSecondary', '');

  const secondaryText = () => {
    let status;
    if (item.status === 'online' || !item.lastUpdate) {
      status = position?.address
    } else {
      status = dayjs(item.lastUpdate).fromNow();
    }
    return (
      <>
      <Typography
        component="span"
        variant="primary"
        sx={{ color: 'text.primary', display: 'inline' }}
      >
        {deviceSecondary && item[deviceSecondary] && `${item[deviceSecondary]} • `}
      </Typography>
      <Typography
        component="span"
        variant="primary"
        sx={{ display: 'inline'}}
        noWrap={true}
      >
        {status}
      </Typography>
      
      </>
    );
  };

  return (
    <div style={style}>

      <ListItemButton
        divider
        key={item.id}
        onClick={() => dispatch(devicesActions.selectId(item.id))}
        disabled={!admin && item.disabled}
        sx={{
          height: '100px',
          width: '100%',
          overflow: 'hidden',
          padding: '0px 5px',
        }}
      >
        <ListItemAvatar >
          <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          color={item.status==='online'?'success':'error'}
        >
          <Avatar variant="rounded">
            <img className={classes.icon} src={mapIcons[mapIconKey(item.category)]} alt="" />
          </Avatar>
          </StyledBadge>
        </ListItemAvatar>
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '5px 0px'
        }}>
        
          <Stack direction="column">
            <div style={{fontWeight: '600', fontSize:'1.1rem'}}>{item[devicePrimary]}</div>
            <div style={{fontWeight: '400', fontSize:'0.9rem'}}>{secondaryText()}</div>
          </Stack>


          <Stack direction="row" spacing={1}>
            {position?.attributes?.hasOwnProperty('batteryLevel') && <Chip icon={<BatteryChargingFullIcon/>} color="success" label={position?.attributes.batteryLevel+'%'} size="small" variant="outlined" />}
            {position?.hasOwnProperty('speed') && position.speed > 0 &&<Chip icon={<SpeedIcon/>} color="info" label={Math.floor(position?.speed)+' Km/h'} size="small" variant="outlined" />}
          </Stack>
        </Box>
        
        {position && (
          <>
            {position.attributes.hasOwnProperty('alarm') && (
              <Tooltip title={`${t('eventAlarm')}: ${formatAlarm(position.attributes.alarm, t)}`}>
                <IconButton size="small">
                  <ErrorIcon fontSize="small" className={classes.error} />
                </IconButton>
              </Tooltip>
            )}
            {position.attributes.hasOwnProperty('ignition') && (
              <Tooltip title={`${t('positionIgnition')}: ${formatBoolean(position.attributes.ignition, t)}`}>
                <IconButton size="small">
                  {position.attributes.ignition ? (
                    <EngineIcon width={20} height={20} className={classes.success} />
                  ) : (
                    <EngineIcon width={20} height={20} className={classes.neutral} />
                  )}
                </IconButton>
              </Tooltip>
            )}

          </>
        )}
      </ListItemButton>
    </div>
  );
};

export default DeviceRow;
