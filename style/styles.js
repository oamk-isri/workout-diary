import { StyleSheet } from 'react-native';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const customPaper = {
  ...DefaultTheme,
  colors: {
    "colors": {
      "primary": "rgb(56, 107, 1)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(183, 244, 129)",
      "onPrimaryContainer": "rgb(13, 32, 0)",
      "secondary": "rgb(87, 98, 74)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(218, 231, 201)",
      "onSecondaryContainer": "rgb(21, 30, 12)",
      "tertiary": "rgb(56, 102, 100)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(187, 236, 233)",
      "onTertiaryContainer": "rgb(0, 32, 31)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(253, 253, 245)",
      "onBackground": "rgb(26, 28, 24)",
      "surface": "rgb(253, 253, 245)",
      "onSurface": "rgb(26, 28, 24)",
      "surfaceVariant": "rgb(224, 228, 214)",
      "onSurfaceVariant": "rgb(68, 72, 62)",
      "outline": "rgb(116, 121, 109)",
      "outlineVariant": "rgb(196, 200, 186)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 49, 44)",
      "inverseOnSurface": "rgb(241, 241, 234)",
      "inversePrimary": "rgb(156, 215, 105)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(243, 246, 233)",
        "level2": "rgb(237, 241, 226)",
        "level3": "rgb(231, 237, 218)",
        "level4": "rgb(229, 236, 216)",
        "level5": "rgb(225, 233, 211)"
      },
      "surfaceDisabled": "rgba(26, 28, 24, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 24, 0.38)",
      "backdrop": "rgba(45, 50, 40, 0.4)"
    }
  }
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  fab: {
    position: 'absolute',
    margin: 0,
    right: 24,
    bottom: 24,
  },
  reload: {
    position: 'absolute',
    margin: 0,
    right: 224,
    bottom: 24,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  titleSmall: {
    fontSize: 20,
    paddingLeft: 10
  },
  titleSmaller: {
    fontSize: 16,
    paddingLeft: 10
  },
  datePicker: {
    marginTop: 28,
    marginBottom: 55,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  listDescription: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between"
  },
  surface: {
    padding: 2,
    height: 60,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surfaceContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between"
  },
  surfaceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surfaceText: {
    paddingLeft: 2
  }
});