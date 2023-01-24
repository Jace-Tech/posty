import { ReactNode } from 'react';

export type IRootStackParamList = {
  Home: undefined;
};

export type ScreenType = {
  name: keyof IRootStackParamList;
  component: React.FC;
  options: NativeStackNavigationOptions
}