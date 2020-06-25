import axios from "axios";
import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Picker,
  //select do react-native
} from "react-native";
import { RectButton, State } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IBGEUFResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [ufItems, setUfItems] = useState<string[]>([]);
  const [cityItems, setCityItems] = useState<string[]>([]);
  function handleNavigationToPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }
  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfItems(ufInitials);
      });
  }, [uf]);
  useEffect(() => {
    //carregar as cidades sempre que a UF mudar
    if (uf === "") {
      return;
    }
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCityItems(cityNames);
      });
  }, [city]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ImageBackground
          source={require("../../assets/home-background.png")}
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
        >
          <View style={styles.main}>
            <Image source={require("../../assets/logo.png")} />

            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Text>
          </View>
          <View style={{ height: 90 }} />
          <View style={styles.footer}>
            <View
              style={{
                borderRadius: 5,

                overflow: "hidden",
              }}
            >
              <Picker
                style={styles.input}
                selectedValue={uf}
                onValueChange={(value) => setUf(value)}
              >
                <Picker.Item label="Selecione uma UF" value="" />
                {ufItems.map((item) => (
                  <Picker.Item key={item} value={item} label={item} />
                ))}
              </Picker>
            </View>
            <View
              style={{
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <Picker
                style={styles.input}
                selectedValue={city}
                onValueChange={(value) => setCity(value)}
              >
                <Picker.Item label="Selecione uma cidade" value="" />
                {cityItems.map((item) => (
                  <Picker.Item key={item} value={item} label={item} />
                ))}
              </Picker>
            </View>

            <RectButton
              style={styles.button}
              onPress={handleNavigationToPoints}
            >
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#FFF" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",

    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    color: "gray",
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});
export default Home;
