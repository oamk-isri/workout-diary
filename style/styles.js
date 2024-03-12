import { StyleSheet } from 'react-native';

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
  datePicker: {
    marginTop: 28,
    marginBottom: 55,
  },
  listDescription: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center"
  }

});