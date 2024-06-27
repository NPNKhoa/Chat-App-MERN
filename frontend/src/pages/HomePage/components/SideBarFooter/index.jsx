import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import useLogout from '../../../../hooks/useLogout';
import useAuthContext from '../../../../context/useAuthContext';

const SideBarFooter = () => {
  const { logout, } = useLogout();
  const { authUser, } = useAuthContext();

  return (
    <div className='border-t border-slate-300 pt-2 flex items-center gap-2'>
      <div className='avatar online'>
        <div className='w-8 rounded-full'>
          <img src={authUser.profilePicture} />
        </div>
      </div>
      <h3 className='font-medium text-sm w-3/4'>{authUser.fullname}</h3>
      <Button onClick={logout}>
        <LogoutIcon />
      </Button>
    </div>
  );
};

export default SideBarFooter;
