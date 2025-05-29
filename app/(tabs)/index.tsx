import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Linking } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [valueAlerta, setValueAlerta] = useState(false);
  const [contador, setContador] = useState(null);

  const alerta = () => {
    setValueAlerta(true);
    let tempo = 10;
    setContador(tempo);

    const intervalo = setInterval(() => {
      tempo -= 1;
      setContador(tempo);

      if (tempo <= 0) {
        clearInterval(intervalo);
        alert('Brincadeira, não vamos te explodir!!! \nCuidado com os links, eles podem ser perigosos!');
        setValueAlerta(false);
        setContador(null);
      }
    }, 1000);
  };

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

          <TouchableOpacity
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/design/p0h5ifhK2DHYKEzXfjXeM5/Site?node-id=0-1&m=dev&t=RDeB98tmfsNTSW3C-1'
              )
            }>
            <Text style={{ color: '#fff' }}>Veja nosso projeto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.link, { backgroundColor: 'red', marginTop: 50 }]}
            onPress={alerta}>
            <Text style={{ color: '#fff' }}>Não clique aqui!</Text>
          </TouchableOpacity>

          {valueAlerta && (
            <View>
              <Text style={[styles.paragraph, { color: 'red', fontWeight: 'bold' }]}>
                Ok, explodindo o celular!!!!!!!!!!
              </Text>
              {contador !== null && (
                <Text style={[styles.bomba, { fontSize: 20, marginTop: 10 }]}>
                  Contagem: {contador}
                </Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
