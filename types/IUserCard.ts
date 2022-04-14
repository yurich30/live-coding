interface IUserCard {
  address: {},
  company: {},
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
}

export interface IPropsUserCard {
  user: IUserCard
}
