import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 4,
    paddingTop: 50
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    padding: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'justify',
  },
  section: {
    fontSize: 18,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 12,
  },
  list: {
    paddingLeft: 12,
  },
  item: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  link: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    alignItems: 'center',
    maxWidth: '80%',
    alignSelf: 'center',
  },
  bomba: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 8,
    borderColor: '#f5c6cb',
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default styles;
``
