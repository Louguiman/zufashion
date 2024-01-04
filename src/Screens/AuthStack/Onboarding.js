import React from "react";
import {
  SafeAreaView,
  //   Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const COLORS = { primary: "#282534", white: "#fff", vert: "#2c9644" };

const slides = [
  {
    id: "1",
    image: require("../../../assets/onboarding/agenda.png"),
    title: "Trouvez le/la couturier(e) le plus proche",
    subtitle:
      "En saisissant votre adresse, Bwebloo vous propose les couturiers(ères) disponibles autour de vous, avec la possibilité de consulter leur profil, les avis laissés par d'autres clients et quelques autres informations.",
  },
  {
    id: "2",
    image: require("../../../assets/onboarding/agenda.png"),

    title: "Réception de votre demande par le/la couturier(e)",
    subtitle:
      "Après réception de votre demande, le/la couturier(e) peut l'accepter, la refuser ou demander plus de détails. Nous vous tiendrons informés de l'état de votre demande.",
  },
  {
    id: "3",
    // image: require("../../../../assets/icon/3.png"),
    title: "Gérez votre agenda",
    subtitle:
      "Que vous soyez couturier(e) à temps plein ou que cela soit un passe-temps, remplissez votre calendrier en un clic pour recevoir des demandes uniquement lors de vos disponibilités.",
  },
  {
    id: "4",
    image: require("../../../assets/onboarding/agenda.png"),

    title: "Gagnez en visibilité",
    subtitle:
      "Votre présence sur Bweebloo vous permet de gagner en visibilité, soyez facilement repéré par de nouveaux utilisateurs via notre moteur de recherche.",
  },
];

const Slide = ({ item }) => {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Animatable.Image
        animation="slideInDown"
        duraton="1500"
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;

    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <SafeAreaView
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <Animatable.View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50, alignItems: "center" }}>
              <LinearGradient
                colors={["#1a1818", "#FFFF"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 2.0, y: 2.0 }}
                style={{
                  height: 48,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 300,
                  elevation: 5,
                }}
              >
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate("Ecran")}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                  >
                    COMMENCER
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: "#1a1818",
                    borderWidth: 1,
                    backgroundColor: "white",
                    elevation: 10,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  SAUTER
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <LinearGradient
                colors={["#1a1818", "#FFFF"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 2.0, y: 2.0 }}
                style={{
                  height: 48,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 200,
                  elevation: 10,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={styles.btn}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      color: "white",
                    }}
                  >
                    SUIVANTS
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </Animatable.View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        nestedScrollEnabled
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        // contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "black",
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "#1a1818",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Onboarding;
