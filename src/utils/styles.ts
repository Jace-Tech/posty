import { DEFAULT_MARGIN } from './constants';
import { StyleSheet } from "react-native";

export const GLOBAL_STYLE = StyleSheet.create({
  container: {
    flex: 1,  
    paddingHorizontal: DEFAULT_MARGIN
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 40
  }
});
