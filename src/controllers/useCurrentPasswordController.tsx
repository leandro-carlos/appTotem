import { useRoute } from "@react-navigation/native";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Alert } from "react-native/";

interface TypePassword {
  password?: string;
}

interface dataPasswordProps {
  Data_Hora_Atendimento: string;
  Data_Hora_Emissão: string;
  Guichê: string;
  Senha: string;
  Tipo_Senha: string;
}

export default function currentPasswordController() {
  const route = useRoute();

  const { password } = route.params as TypePassword;

  return {
    password,
  };
}
