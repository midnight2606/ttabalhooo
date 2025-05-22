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
});

export default styles;
``
