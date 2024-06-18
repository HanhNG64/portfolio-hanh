import React, { useEffect, useRef, useState } from 'react';
import { userService, accountService } from '@services';
import { Card, Typography } from '@material-tailwind/react';
import Loader from '@components/public/loader';

const TABLE_HEAD = ['Nom', 'Email'];

const User = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (flag.current === false) {
          if (accountService.isLogged()) {
            const result = await userService.getAllUsers(accountService.getToken());
            setUsers(result.data);
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

  const deleteUser = async (id) => {
    try {
      await userService.deleteUser(accountService.getToken(), id);
      setUsers((current) => current.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isLoad) {
    return <Loader />;
  }

  return (
    <div className="pt-20 pb-20">
      <Card className="h-full w-[500px] overflow-scroll ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(({ name, email }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography onClick={deleteUser()} variant="small" color="blue-gray" className="font-medium">
                        Supprimer
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default User;
