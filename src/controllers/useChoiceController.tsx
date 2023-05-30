import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { Alert } from "react-native/";
import { useState } from "react";

export default function ChoiceController() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function choiceType() {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("CurrentPassword", {
        password: "(SG) 1501965",
      });
    }, 1000);
  }

  return {
    choiceType,
    loading,
  };
}
