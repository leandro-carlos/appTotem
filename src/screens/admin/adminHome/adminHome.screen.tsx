import Background from "../../../components/Background/Background";
import Header from "../../../components/Header/Header.screen";
import useAdminController from "../../../controllers/useAdminController";
import {
  ButtonOptions,
  ButtonText,
  Container,
  ContenModal,
  Image,
  TextForgot,
} from "./adminHome.styles";

import { ActivityIndicator } from "react-native";

export default function AdminHome() {
  const { nextPassword, loading, nextReport } = useAdminController();
  return (
    <Background>
      <Header tittle="Adminstração" />

      <Container>
        <Image
          resizeMode="contain"
          source={require("../../../assets/imageWelcome.png")}
        />
        <ContenModal>
          <ButtonOptions onPress={nextPassword}>
            <ButtonText>
              {loading ? <ActivityIndicator /> : "Chamar próxima senha"}
            </ButtonText>
          </ButtonOptions>

          <ButtonOptions onPress={nextReport}>
            <ButtonText>RELATÓRIOS</ButtonText>
          </ButtonOptions>

          <TextForgot>
            Aqui você pode continuar o atendimento da fila, ou gerar relatórios.
          </TextForgot>
        </ContenModal>
      </Container>
    </Background>
  );
}
