import { apiService } from './api.service';

let addContact = (data) => {
  return apiService.addContact(data);
};

export const contactService = { addContact };
