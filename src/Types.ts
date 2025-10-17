type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoPage = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoPage };
