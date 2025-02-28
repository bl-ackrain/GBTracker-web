import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { devicesActions } from '../store';
import { useEffectAsync } from '../reactHelper';
import DeviceRow from './DeviceRow';

import {  Tab, Tabs } from '@mui/material';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import ViewListIcon from '@mui/icons-material/ViewList';

const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '100%',
  },
  listInner: {
    position: 'relative',
    margin: theme.spacing(1.5, 0),
  },
}));

const DeviceList = ({ devices }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listInnerEl = useRef(null);
  const [onlineCount, setOnlineCount] = useState(0);
  const [offlineCount, setOfflineCount] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [listData, setListData] = useState(devices);

  const handleTabChange = (event, newValue) => {
    if(newValue===tabValue)
      return
    setTabValue(newValue);
  };

  if (listInnerEl.current) {
    listInnerEl.current.className = classes.listInner;
  }

  const [, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setOnlineCount(devices.filter((device)=> device.status==='online').length)
    setOfflineCount(devices.filter((device)=> device.status!=='online').length)

    if(tabValue===0)
      setListData(devices)

    if(tabValue===1)
      setListData(devices?.filter((device)=> device.status==='online'))

    if(tabValue===2)
      setListData(devices?.filter((device)=> device.status!=='online'))

  }, [devices, tabValue]);

  useEffectAsync(async () => {
    const response = await fetch('/api/devices');
    if (response.ok) {
      dispatch(devicesActions.refresh(await response.json()));
    } else {
      throw Error(await response.text());
    }
  }, []);

  

  return (
    <AutoSizer className={classes.list}>

      {({ height, width }) => (
        <div>
      <Tabs 
      sx={{
        padding: '0px',
        width: width,
        height: '70px',
        color: '#fff'
      }}
      onChange={handleTabChange}

      value={tabValue} aria-label="Device list">
        <Tab icon={<ViewListIcon />} iconPosition="top" label={'All ['+devices.length+']'} />
        <Tab sx={{color:'green'}} icon={<WifiTetheringIcon />} iconPosition="top" label={'Online ['+onlineCount+']'} />
        <Tab sx={{color:'red'}} icon={<WifiTetheringOffIcon />} iconPosition="top"  label={'Offline ['+offlineCount+']'} />
      </Tabs>


      <FixedSizeList
          width={width}
          height={height-70}
          itemCount={listData.length}
          itemData={listData}
          itemSize={100}
          overscanCount={10}
          innerRef={listInnerEl}
        >
          {DeviceRow}
        </FixedSizeList>
        </div>
        
      )}
    </AutoSizer>
  );
};

export default DeviceList;
