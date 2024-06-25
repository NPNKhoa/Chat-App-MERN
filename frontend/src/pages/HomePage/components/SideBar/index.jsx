import { TextField, InputAdornment, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SidebarHeader from "../SidebarHeader";
import { useTranslation } from "react-i18next";
import ContactList from "../ContactList";
import SideBarFooter from "../SideBarFooter";

const SideBar = () => {
  const { t, } = useTranslation();
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
        size="small"
      />
      <ContactList />
      <SideBarFooter />
    </div>
  );
};

export default SideBar;