export interface IDashboardLayout {
  children: React.ReactNode;
}

export interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface MenuGroup {
  title: string;
  list: MenuItem[];
}

export interface IChartData {
  name: string;
  visit: number;
  click: number;
}

export interface ISearch {
  placeholder: string;
}

export interface IConnection {
  isConnected?: string;
}

export interface ISearchParams {
  [key: string]: string;
}

export interface IUserType {
  id: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
  isActive: boolean;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}
