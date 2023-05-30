import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { Alert } from "react-native/";
import { useState } from "react";

export default function useAdminController() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function nextPassword() {
    setLoading(true);
    setTimeout(() => {
      Alert.alert("Senha", `A próxima senha é: (SP) 41450 `);
      setLoading(false);
    }, 1000);
  }

  function nextReport() {
    navigation.navigate("Report");
  }

  return {
    nextPassword,
    loading,
    nextReport,
  };
}
