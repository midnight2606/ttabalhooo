import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>EduTrack</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.subtitle}>O que é o EduTrack?</Text>
          <Text style={styles.paragraph}>
            É uma plataforma digital para alunos e professores organizarem projetos escolares,
            trabalhos em grupo e atividades interdisciplinares.
          </Text>

          <Text style={styles.section}>Funcionalidades</Text>
          <View style={styles.list}>
            <Text style={styles.item}>• Permite criar etapas</Text>
            <Text style={styles.item}>• Organizar trabalhos</Text>
            <Text style={styles.item}>• Realizar upload</Text>
            <Text style={styles.item}>• Definir prazos e visualizar progresso</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
