import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import Logo from "./assets/logo.webp";

export default function Calcular_IMC() {
  const [usuario, setUsuário] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [corResultado, setCorResultado] = useState("#000");

  function calcularIMC() {
    const pesoNum = parseFloat(peso.replace(",", "."));
    let alturaNum = parseFloat(altura.replace(",", "."));

    // Validações
    if (!usuario || !peso || !altura) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      Alert.alert("Erro", "Digite apenas números válidos.");
      return;
    }

    if (pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert("Erro", "Peso e altura devem ser maiores que zero.");
      return;
    }

    // Converter cm para metro automaticamente (extra)
    if (alturaNum > 3) {
      alturaNum = alturaNum / 100;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(2);

    let nivel = "";
    let msg = "";
    let cor = "";

    if (imc < 18.5) {
      nivel = "Abaixo do peso";
      msg = "Atenção: procure orientação nutricional.";
      cor = "#f4a261";
    } else if (imc < 25) {
      nivel = "Peso normal";
      msg = "Parabéns! Continue mantendo hábitos saudáveis.";
      cor = "#2a9d8f";
    } else if (imc < 30) {
      nivel = "Sobrepeso";
      msg = "Atenção: pratique atividades físicas.";
      cor = "#e9c46a";
    } else if (imc < 35) {
      nivel = "Obesidade Grau I";
      msg = "Atenção: procure orientação profissional.";
      cor = "#f77f00";
    } else if (imc < 40) {
      nivel = "Obesidade Grau II";
      msg = "Importante buscar acompanhamento médico.";
      cor = "#d62828";
    } else {
      nivel = "Obesidade Grau III (Mórbida)";
      msg = "Risco elevado à saúde. Procure ajuda médica.";
      cor = "#9d0208";
    }

    setResultado(imcFormatado);
    setClassificacao(nivel);
    setMensagem(msg);
    setCorResultado(cor);
  }

  function limparCampos() {
    setUsuário ("");
    setPeso("");
    setAltura("");
    setResultado(null);
    setClassificacao("");
    setMensagem("");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />

      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        keyboardType="text"
        value={usuario}
        onChangeText={setUsuário}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m ou cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: "#6c757d" }]}
        onPress={limparCampos}
      >
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.card}>
          <Text style={[styles.resultado, { color: corResultado }]}>
            IMC: {resultado}
          </Text>
          <Text style={styles.classificacao}>{classificacao}</Text>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9CAEB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  botao: {
    width: "90%",
    backgroundColor: "#2557e0",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
  resultado: {
    fontSize: 22,
    fontWeight: "bold",
  },
  classificacao: {
    fontSize: 18,
    marginTop: 5,
  },
  mensagem: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});
