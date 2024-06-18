import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { userService, accountService } from '@services';
import { useNavigate } from 'react-router-dom';
import UserForm from '@components/admin/userForm';
import Loader from '@components/public/loader';

const UserEdit = () => {
  let { id } = useParams();
  const [user, setUser] = useState();
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);
  let navigate = useNavigate();
  const [info, setInfo] = useState({ message: '', success: true });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (flag.current === false) {
          if (accountService.isLogged()) {
            const result = await userService.getUser(accountService.getToken(), id);
            setUser(result.data);
            setLoad(true);
          }
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
    return () => (flag.current = true);
  }, []);

  const onSubmit = async (user) => {
    try {
      const rep = await userService.updateUser(accountService.getToken(), user);
      if (rep.ok) {
        navigate('../.');
        setInfo({ message: "L'utisateur a été modifié avec succès !", success: true });
      } else {
        setInfo({ message: "L'utisateur n'a pas pu être modifié.", success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isLoad) {
    return <Loader />;
  }

  return (
    <>
      <div className="pt-20">
        <h2 className="mb-12 text-center">Modifier un utilisateur</h2>
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
      <UserForm submit={onSubmit} user={user} />
    </>
  );
};

export default UserEdit;
