import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Draggable from 'react-draggable';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Menu,
  MenuItem,
  CardMedia,
  TableFooter,
  Link,
  Tooltip,
  TableHead,
  Box,
  Tab,
  Stack,
  CardHeader,
  Avatar,
  Divider,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import PublishIcon from '@mui/icons-material/Publish';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PendingIcon from '@mui/icons-material/Pending';
import RouteIcon from '@mui/icons-material/Route';

import { useTranslation } from './LocalizationProvider';
import RemoveDialog from './RemoveDialog';
import PositionValue from './PositionValue';
import { useDeviceReadonly } from '../util/permissions';
import usePositionAttributes from '../attributes/usePositionAttributes';
import { devicesActions } from '../../store';
import { useCatch, useCatchCallback } from '../../reactHelper';
import { useAttributePreference } from '../util/preferences';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { mapIconKey, mapIcons } from '../../map/core/preloadImages';

const useStyles = makeStyles((theme) => ({
  card: {
    pointerEvents: 'auto',
    maxWidth: theme.dimensions.popupMaxWidth,
    minWidth: '250px',
  },
  media: {
    height: '100px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  mediaButton: {
    color: theme.palette.primary.contrastText,
    mixBlendMode: 'difference',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  content: {
    padding: '0px 5px',
    maxHeight: theme.dimensions.cardContentMaxHeight,

    overflowX: 'hidden',
    overflowY: 'auto',
  },
  icon: {
    width: '25px',
    height: '25px',
  },
  table: {
    '& .MuiTableCell-sizeSmall': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .MuiTableCell-sizeSmall:first-child': {
      paddingRight: theme.spacing(1),
    },
  },
  cell: {
    borderBottom: 'none',
  },
  actions: {
    justifyContent: 'space-between',
  },
  root: ({ desktopPadding }) => ({
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 5,
    left: '50%',
    [theme.breakpoints.up('md')]: {
      left: `calc(50% + ${desktopPadding} / 2)`,
      bottom: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      left: '50%',
      bottom: `calc(${theme.spacing(3)} + ${theme.dimensions.bottomBarHeight}px)`,
    },
    transform: 'translateX(-50%)',
  }),
}));

const StatusRow = ({ name, content }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.cell}>
        <Typography variant="body2">{name}</Typography>
      </TableCell>
      <TableCell className={classes.cell}>
        <Typography variant="body2" color="textSecondary">{content}</Typography>
      </TableCell>
    </TableRow>
  );
};

const NewStatusCard = ({ deviceId, position, onClose, disableActions, desktopPadding = 0 }) => {
  const classes = useStyles({ desktopPadding });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const t = useTranslation();

  const deviceReadonly = useDeviceReadonly();

  const shareDisabled = useSelector((state) => state.session.server.attributes.disableShare);
  const user = useSelector((state) => state.session.user);
  const device = useSelector((state) => state.devices.items[deviceId]);

  const deviceImage = device?.attributes?.deviceImage;

  const positionAttributes = usePositionAttributes(t);
  const positionItems = useAttributePreference('positionItems', 'fixTime,address,speed,totalDistance');

  const navigationAppLink = useAttributePreference('navigationAppLink');
  const navigationAppTitle = useAttributePreference('navigationAppTitle');

  const [anchorEl, setAnchorEl] = useState(null);

  const [removing, setRemoving] = useState(false);

  const handleRemove = useCatch(async (removed) => {
    if (removed) {
      const response = await fetch('/api/devices');
      if (response.ok) {
        dispatch(devicesActions.refresh(await response.json()));
      } else {
        throw Error(await response.text());
      }
    }
    setRemoving(false);
  });

  const handleGeofence = useCatchCallback(async () => {
    const newItem = {
      name: t('sharedGeofence'),
      area: `CIRCLE (${position.latitude} ${position.longitude}, 50)`,
    };
    const response = await fetch('/api/geofences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    if (response.ok) {
      const item = await response.json();
      const permissionResponse = await fetch('/api/permissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: position.deviceId, geofenceId: item.id }),
      });
      if (!permissionResponse.ok) {
        throw Error(await permissionResponse.text());
      }
      navigate(`/app/settings/geofence/${item.id}`);
    } else {
      throw Error(await response.text());
    }
  }, [navigate, position]);

  const AttributesTable =() =>{
    return(
      <Table size="small" classes={{ root: classes.table }}>
      <TableHead>
        <TableRow>
          <TableCell width={'40%'}>Attribute</TableCell>
          <TableCell width={'60%'}>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {positionItems.split(',').filter((key) => position.hasOwnProperty(key) || position.attributes.hasOwnProperty(key)).map((key) => (
          <StatusRow
            key={key}
            name={positionAttributes[key]?.name || key}
            content={(
              <PositionValue
                position={position}
                property={position.hasOwnProperty(key) ? key : null}
                attribute={position.hasOwnProperty(key) ? null : key}
              />
            )}
          />
        ))}

      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2} className={classes.cell}>
            <Typography variant="body2">
              <Link component={RouterLink} to={`/app/position/${position.id}`}>{t('sharedShowDetails')}</Link>
            </Typography>
          </TableCell>
        </TableRow>
      </TableFooter>
      </Table>
    )
  }

  const DeviceStatus =() =>{
    if(position===null || device ===null) return
    //console.log(position)
    //console.log(device)
    return(
      <Stack>
        <Box>Modèle: {device.model}</Box>
        
        <Box>Vitesse: {position.speed} km/h</Box>
        <Box>Véhicule: {position.attributes.motion?'En Mouvement':'Arrêté'}</Box>
        <Box>ignition: {position.attributes.ignition?'on':'off'}</Box>
        <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-evenly', bgcolor:'black', textAlign:'center', color:'#cc2', borderRadius:'8px'}}>
        
            <svg width={30} height={30} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path><path fill="#ffffff" d="M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"></path><path fill="#ffffff" d="M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"></path></g></svg>
            <Typography component={'span'} sx={{fontSize:'1.8rem',letterSpacing:'2px',fontWeight:'400', fontFamily: "'Seven Segment', sans-serif"}}>{Math.round(position.attributes.totalDistance/1000)}</Typography>
            <Typography component={'span'} sx={{paddingLeft:'8px',fontSize:'1.2rem',fontWeight:'600',}}>Km</Typography>
        </Box>
        
      </Stack>
    )}

  const [tabValue, setTabValue] = React.useState('2');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        {device && (
          <Draggable
            handle={`.${classes.media}, .${classes.header}`}
          >
            <Card elevation={3} className={classes.card}>
            {deviceImage && (
                <CardMedia
                    component={'img'}
                  className={classes.media}
                  image={`/api/media/${device.uniqueId}/${deviceImage}`}
                />
              )}
                <CardHeader className={classes.header} sx={{ padding: '8px'}}
                    avatar={
                    <Avatar sx={{ bgcolor: '#eee' }} variant='rounded'>
                        <img src={mapIcons[mapIconKey(device.category)]} alt="" />
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="close" onClick={onClose} onTouchStart={onClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    }
                    title={
                        <Typography
                                component="span"
                                variant="primary"
                                sx={{ fontWeight: '600'}}
                              >
                                {device.name}
                        </Typography>
                    }
                    subheader={device.attributes.VehicleLicensePlate}
                />

            <Divider />
              
              {position && (
                <CardContent className={classes.content}>
                    <DeviceStatus />
                </CardContent>
              )}
              <Divider />
              <CardActions classes={{ root: classes.actions }} disableSpacing>
                <Tooltip title={t('sharedExtra')}>
                  <IconButton
                    color="secondary"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    disabled={!position}
                  >
                    <PendingIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('reportReplay')}>
                  <IconButton
                    onClick={() => navigate('/app/replay')}
                    disabled={disableActions || !position}
                  >
                    <RouteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('commandTitle')}>
                  <IconButton
                    onClick={() => navigate(`/app/settings/device/${deviceId}/command`)}
                    disabled={disableActions}
                  >
                    <PublishIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('sharedEdit')}>
                  <IconButton
                    onClick={() => navigate(`/app/settings/device/${deviceId}`)}
                    disabled={disableActions || deviceReadonly}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                
              </CardActions>
            </Card>
          </Draggable>
        )}
      </div>
      {position && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={handleGeofence}>{t('sharedCreateGeofence')}</MenuItem>
          <MenuItem component="a" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${position.latitude}%2C${position.longitude}`}>{t('linkGoogleMaps')}</MenuItem>
          <MenuItem component="a" target="_blank" href={`http://maps.apple.com/?ll=${position.latitude},${position.longitude}`}>{t('linkAppleMaps')}</MenuItem>
          <MenuItem component="a" target="_blank" href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${position.latitude}%2C${position.longitude}&heading=${position.course}`}>{t('linkStreetView')}</MenuItem>
          {navigationAppTitle && <MenuItem component="a" target="_blank" href={navigationAppLink.replace('{latitude}', position.latitude).replace('{longitude}', position.longitude)}>{navigationAppTitle}</MenuItem>}
          {!shareDisabled && !user.temporary && (
            <MenuItem onClick={() => navigate(`/app/settings/device/${deviceId}/share`)}><Typography color="secondary">{t('deviceShare')}</Typography></MenuItem>
          )}
        </Menu>
      )}
      <RemoveDialog
        open={removing}
        endpoint="devices"
        itemId={deviceId}
        onResult={(removed) => handleRemove(removed)}
      />
    </>
  );
};

export default NewStatusCard;
