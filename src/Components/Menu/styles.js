import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px; 
`;

export const Code = styled.View`
 padding: 10px;
 align-self: center;
 overflow: hidden;
`;

export const Nav = styled.View`
    margin-top: 30px;
    border-top-width: 0.25px;
    border-top-color: rgba(255, 255, 255, 0.5);
`;
export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: 0.25px;
    border-bottom-color: rgba(255, 255, 255, 0.5);


`;
export const NavText = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: 0.25px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    margin-top: 20px;
    padding: 12px;

    justify-content: center;
    align-items: center;

`;
export const SignOutButtonText = styled.Text`
    color: #fff;
    font-size: 15px;
`;
