import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 80}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #0c3270;
  font-family: 'RobotoSlab-Medium';
  margin: 15px 0 15px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #0c3270;
  font-family: 'RobotoSlab-Medium';
  margin: 0px 0px 15px 0;
`;

export const InputDescription = styled.Text`
  color: #0c3270;
  align-self: flex-start;
  font-family: 'RobotoSlab-Regular';
`;

export const CarImageButton = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

export const CarImage = styled.Image`
  width: 250px;
  height: 150px;
  border-radius: 5px;
  align-self: center;
`;

export const PictureIconContainer = styled.View`
  position: absolute;
  top: 135px;
  right: -15px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #0c3270;
  border-radius: 16px;
`;

export const ButtonContainer = styled.View`
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const BackToDashboard = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  border-top-width: 1px;
  border-color: #fff;
  padding: 0 10px 0 10px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const BackToDashboardText = styled.Text`
  color: #2f8592;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;