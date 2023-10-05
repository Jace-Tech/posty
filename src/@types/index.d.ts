import { ReactNode } from 'react';

export type IRootStackParamList = {
  Home: undefined;
  Create: undefined;
};

export type ScreenType = {
  name: keyof IRootStackParamList;
  component: React.FC;
  options: NativeStackNavigationOptions
}