import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@services';
import LoginForm from '@components/admin/loginForm';

const Login = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ message: '', success: true });

  const onSubmit = async (user) => {
    try {
      const reponse = await accountService.login(user);
      if (reponse.ok) {
        const result = await reponse.json();
        accountService.saveToken(result.token);
        navigate('/admin');
        setInfo({ message: 'Connexion succès', success: true });
      } else {
        setInfo({ message: 'Connexion refusée.', success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="pt-20">
        <h2 className="mb-12 text-center">Connexion</h2>
      </div>
      {info.message && (
        <div
          className={`bg-${info.success ? 'green' : 'red'}-100 border ${
            info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
          } px-4 py-3 rounded mb-4" role="alert" mb-4`}
        >
          {info.message}
        </div>
      )}
      <LoginForm submit={onSubmit} />
    </>
  );
};

export default Login;
