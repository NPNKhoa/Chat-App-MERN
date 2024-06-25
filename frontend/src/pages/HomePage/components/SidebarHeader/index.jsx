import CreateIcon from '@mui/icons-material/Create';
import { Divider, } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SidebarHeader = () => {
  const { t, } = useTranslation();
  return (
    <div className='mb-4'>
      <div className='flex justify-between items-center p-1 mb-4 mt-1'>
        <h2 className='text-3xl font-medium'>{t('chats-label')}</h2>
        <CreateIcon className='hover:cursor-pointer' />
      </div>
      <Divider/>
    </div>
  );
};

export default SidebarHeader;
