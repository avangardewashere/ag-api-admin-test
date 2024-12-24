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
