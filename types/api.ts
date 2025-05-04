export type RegisterSuccess = {
  message: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
};

export type RegisterError = {
  error: string;
  status: number;
};
