/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginForm({ submit, user }) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: useMemo(
      () => ({
        email: user?.email,
        password: user?.password,
      }),
      [user],
    ),
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  function Icon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <section className="mx-auto px-3 pb-20 text-center max-w-[800px] md:w-[70%]">
      <form onSubmit={handleSubmit(submit)} className="projectForm w-full">
        <label className="text-left mb-[2px]" htmlFor="email">
          <p>Email*</p>
          <input
            type="text"
            id="email"
            {...register('email', { required: "L'email est obligatoire." })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>
        <label className="text-left mb-[2px]" htmlFor="password">
          <p>Mot de passe*</p>
          <input
            type="text"
            id="password"
            {...register('password', { required: 'Le mot de passe est obligatoire.' })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>

        <button
          disabled={!isValid}
          className={`py-2 px-4 border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary ${!isValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          Connecter
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
