import api from "../API";

export const CreateUser = async (_novoUser) => {
  await api.post(`/api/Users`, _novoUser);
};
