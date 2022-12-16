import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);

  const { t } = useTranslation();

  return (
    <div className='flex'>
      <h3>Authentificated user email: {user.user?.email}</h3>
    </div>
  );
};

export default HomePage;
