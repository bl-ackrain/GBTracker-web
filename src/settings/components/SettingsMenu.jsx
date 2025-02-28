import React from 'react';
import {
  Divider, List,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import TodayIcon from '@mui/icons-material/Today';
import PublishIcon from '@mui/icons-material/Publish';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HelpIcon from '@mui/icons-material/Help';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from '../../common/components/LocalizationProvider';
import {
  useAdministrator, useManager, useRestriction,
} from '../../common/util/permissions';
import useFeatures from '../../common/util/useFeatures';
import MenuItem from '../../common/components/MenuItem';

const SettingsMenu = () => {
  const t = useTranslation();
  const location = useLocation();

  const readonly = useRestriction('readonly');
  const admin = useAdministrator();
  const manager = useManager();
  const userId = useSelector((state) => state.session.user.id);
  const supportLink = useSelector((state) => state.session.server.attributes.support);

  const features = useFeatures();

  return (
    <>
      <List>
        <MenuItem
          title={t('sharedPreferences')}
          link="/app/settings/preferences"
          icon={<SettingsIcon />}
          selected={location.pathname === '/app/settings/preferences'}
        />
        {!readonly && (
          <>
            <MenuItem
              title={t('sharedNotifications')}
              link="/app/settings/notifications"
              icon={<NotificationsIcon />}
              selected={location.pathname.startsWith('/app/settings/notification')}
            />
            <MenuItem
              title={t('settingsUser')}
              link={`/app/settings/user/${userId}`}
              icon={<PersonIcon />}
              selected={location.pathname === `/app/settings/user/${userId}`}
            />
            <MenuItem
              title={t('deviceTitle')}
              link="/app/settings/devices"
              icon={<SmartphoneIcon />}
              selected={location.pathname.startsWith('/app/settings/device')}
            />
            <MenuItem
              title={t('sharedGeofences')}
              link="/app/geofences"
              icon={<CreateIcon />}
              selected={location.pathname.startsWith('/app/settings/geofence')}
            />
            {!features.disableGroups && (
              <MenuItem
                title={t('settingsGroups')}
                link="/app/settings/groups"
                icon={<FolderIcon />}
                selected={location.pathname.startsWith('/app/settings/group')}
              />
            )}
            {!features.disableDrivers && (
              <MenuItem
                title={t('sharedDrivers')}
                link="/app/settings/drivers"
                icon={<PersonIcon />}
                selected={location.pathname.startsWith('/app/settings/driver')}
              />
            )}
            {!features.disableCalendars && (
              <MenuItem
                title={t('sharedCalendars')}
                link="/app/settings/calendars"
                icon={<TodayIcon />}
                selected={location.pathname.startsWith('/app/settings/calendar')}
              />
            )}
            {!features.disableComputedAttributes && (
              <MenuItem
                title={t('sharedComputedAttributes')}
                link="/app/settings/attributes"
                icon={<StorageIcon />}
                selected={location.pathname.startsWith('/app/settings/attribute')}
              />
            )}
            {!features.disableMaintenance && (
              <MenuItem
                title={t('sharedMaintenance')}
                link="/app/settings/maintenances"
                icon={<BuildIcon />}
                selected={location.pathname.startsWith('/app/settings/maintenance')}
              />
            )}
            {!features.disableSavedCommands && (
              <MenuItem
                title={t('sharedSavedCommands')}
                link="/app/settings/commands"
                icon={<PublishIcon />}
                selected={location.pathname.startsWith('/app/settings/command')}
              />
            )}
            {supportLink && (
              <MenuItem
                title={t('settingsSupport')}
                link={supportLink}
                icon={<HelpIcon />}
              />
            )}
          </>
        )}
      </List>
      {manager && (
        <>
          <Divider />
          <List>
            <MenuItem
              title={t('serverAnnouncement')}
              link="/app/settings/announcement"
              icon={<CampaignIcon />}
              selected={location.pathname === '/app/settings/announcement'}
            />
            {admin && (
              <MenuItem
                title={t('settingsServer')}
                link="/app/settings/server"
                icon={<StorageIcon />}
                selected={location.pathname === '/app/settings/server'}
              />
            )}
            <MenuItem
              title={t('settingsUsers')}
              link="/app/settings/users"
              icon={<PeopleIcon />}
              selected={location.pathname.startsWith('/app/settings/user') && location.pathname !== `/app/settings/user/${userId}`}
            />
          </List>
        </>
      )}
    </>
  );
};

export default SettingsMenu;
