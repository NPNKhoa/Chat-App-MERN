import { TextField, InputAdornment, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SidebarHeader from "../SidebarHeader";
import { useTranslation } from "react-i18next";
import SideBarFooter from "../SideBarFooter";
import { useState } from "react";
import useSearchUsers from "../../../../hooks/useSearchUsers";
import ContactList from "../ContactList";
import useDebounce from "../../../../hooks/useDebounce";

const SideBar = () => {
  const { t, } = useTranslation();
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 500); // delay 5ms
  const { loading, users } = useSearchUsers(debouncedValue);

  return (
    <div className='flex flex-col w-1/4 p-2 border-r border-blue-600 h-full'>
      <SidebarHeader />
      <TextField
        id='search-message-input'
        placeholder={t('search-label')}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        size='small'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {users.length !== 0 ? (
        <ContactList conversations={users} loading={loading} />
      ) : (
        <div className='h-full w-full flex items-center justify-center'>
          <span className="text-2xl">{t('not-found-user-label')}</span>
        </div>
      )}
      <SideBarFooter />
    </div>
  );
};

export default SideBar;