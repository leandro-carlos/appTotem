import {
  CardBallLeft,
  CardPassword,
  Container,
  ContainerText,
  Divider,
  TextGuice,
  TextRight,
  TextType,
} from "./CurrentPassword.styles";
import Tittle from "../../../components/Tittle/Tittle.screen";
import Background from "../../../components/Background/Background";
import { FlatList } from "react-native";
import currentPasswordController from "../../../controllers/useCurrentPasswordController";
import Header from "../../../components/Header/Header.screen";
import { Tickets } from "../../../data/Tickets";

export default function CurrentPassword() {
  const { password } = currentPasswordController();

  return (
    <Background>
      <Header tittle="Sala de atendimento" />

      <Container>
        <Tittle tittle="A sua senha é: " />

        <CardPassword>
          <CardBallLeft />
          <ContainerText>
            <TextRight>{password}</TextRight>
          </ContainerText>
        </CardPassword>

        <Divider />

        <Tittle tittle="Últimas chamadas" />
        <FlatList
          data={Tickets}
          extraData={Tickets}
          numColumns={2}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.Senha.toString()}
          renderItem={({ item }) => (
            <CardPassword>
              <CardBallLeft type={item.Tipo_Senha}>
                <TextType>{item.Tipo_Senha}</TextType>
              </CardBallLeft>
              <ContainerText>
                <TextRight>{item.Senha}</TextRight>
                <TextGuice>{item.Guichê}</TextGuice>
              </ContainerText>
            </CardPassword>
          )}
        />

        <Divider />
      </Container>
    </Background>
  );
}
