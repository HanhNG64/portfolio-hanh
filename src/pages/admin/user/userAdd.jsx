import React, { useState } from 'react';
import { userService, accountService } from '@services';
import { useNavigate } from 'react-router-dom';
import UserForm from '@components/admin/userForm';

const UserAdd = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ message: '', success: true });

  const onSubmit = async (user) => {
    try {
      const rep = await userService.addUser(accountService.getToken(), user);
      if (rep.ok) {
        navigate('../.');
        setInfo({ message: "L'utisateur a été ajouté avec succès !", success: true });
      } else {
        setInfo({ message: "L'utisateur n'a pas pu être ajouté.", success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="pt-20">
        <h2 className="mb-12 text-center">Ajouter un nouvel utilisateur</h2>
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
      <UserForm submit={onSubmit} />
    </>
  );
};

export default UserAdd;
