import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';
import { getUserProfileRequest } from 'src/store/slices/user/user.action';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);

  const { t } = useTranslation();

  // useEffect(() => {
  //   dispatch(getUserProfileRequest());
  // }, []);

  return (
    <div className='flex'>
      <h3>Authentificated user email: {user.user?.email}</h3>
    </div>
  );
};

export default HomePage;
