/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactService } from '@services';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: useMemo(
      () => ({
        name: '',
        email: '',
        message: '',
      }),
      [],
    ),
  });

  const [info, setInfo] = useState({ message: '', success: true });

  const onSubmit = async (data) => {
    try {
      const response = await contactService.addContact(data);
      if (response.ok) {
        reset();
        setInfo({ message: 'Votre message a été envoyé avec succès !', success: true });
      } else {
        setInfo({ message: "Votre message n'a pas pu être envoyé.", success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="mx-auto px-3 text-center text-white max-w-[500px] w-[80%] md:max-w-[800px] md:w-[70%]">
      <div>
        <h2 className="mb-12">On se rencontre ?</h2>
        <p className="mb-12 max-w-[400px] mx-auto">
          Prêt à donner vie à votre projet en ligne ? Ou à la recherche d&apos;une développeuse pour renforcer votre équipe? Rencontrons-nous pour en
          discuter.
        </p>
      </div>
      <form id="contact" onSubmit={handleSubmit(onSubmit)}>
        {info.message && (
          <div
            className={`bg-${info.success ? 'green' : 'red'}-100 border ${
              info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
            } px-4 py-3 rounded mb-4" role="alert" mb-4`}
          >
            {info.message}
          </div>
        )}
        <label className="text-left mb-[2px]" htmlFor="name">
          <p>Nom*</p>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Le nom est obligatoire.' })}
            placeholder="Votre nom"
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </label>

        <label className="text-left mb-[2px]" htmlFor="email">
          <p>Email*</p>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: "L'email est obligatoire.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Veuillez saisir une adresse e-mail valide.',
              },
            })}
            placeholder="Votre email"
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </label>

        <label className="text-left mb-[2px]" htmlFor="message">
          <p>Message*</p>
          <textarea
            type="text"
            id="message"
            {...register('message', {
              required: 'Le message est obligatoire.',
            })}
            placeholder="Votre message"
            className="w-full mb-3 p-1 border rounded-md resize-none min-h-48 text-black"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </label>

        <button
          disabled={!isValid}
          className={`py-2 px-4 border-transparent shadow-sm text-base font-medium rounded-md text-black bg-white ${!isValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          ENVOYER
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
