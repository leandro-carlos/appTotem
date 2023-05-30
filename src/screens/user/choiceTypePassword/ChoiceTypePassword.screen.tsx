import { ActivityIndicator, Text } from "react-native/";
import Background from "../../../components/Background/Background";
import Button from "../../../components/Button/Button.screen";
import Header from "../../../components/Header/Header.screen";
import useChoiceController from "../../../controllers/useChoiceController";
import { Container } from "./ChoiceTypePassword.styles";

export default function ChoiceTypePassword() {
  const { choiceType, loading } = useChoiceController();

  // tipo_senha = 0 - gera senha SP
  // tipo_senha = 1 - gera senha SG
  // tipo_senha = 2 - gera senha SE

  if (loading) {
    return (
      <Background>
        <Container>
          <ActivityIndicator />
          <Text style={{ color: "#fff" }}>Carregando..</Text>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Header tittle="Tipo de atendimento" />
      <Container>
        <Button
          onPress={() => choiceType("0")}
          text="(SP) Senha Prioritária"
          buttonColor="#B0E298"
        />

        <Button
          onPress={() => choiceType("1")}
          text="(SG) Senha Geral"
          buttonColor="#6883BA"
        />

        <Button
          onPress={() => choiceType("2")}
          text="(RE) Retirar exame"
          buttonColor="#E072A4"
        />
      </Container>
    </Background>
  );
}
