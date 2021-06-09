import React from 'react';
import { Text, StyleSheet,Slider} from 'react-native';
import { Content, Card, CardItem, Body, Switch } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Block, PanSlider } from '../components';
import { theme } from '../theme';

const CurtainCard = ({toggleSwitch,isEnabled,direction,handleDirection,...props})=> {

  const renderHeader = () => (
<CardItem header bordered style={styles.lightHeader}>
      <Content
        contentContainerStyle={styles.contentStyle}>
        <MaterialCommunityIcons
          size={20}
          color={theme.colors.accent}
          name="lightbulb"
          {...props}
        />
        <Text>Curtains</Text>
      </Content>
      <Switch
        trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CardItem>
  ) 

  const renderBrightnessSection = () => (
    <Block>
          <Text style={{ marginVertical: theme.sizes.base * 2 }}>
            Brightness
          </Text>
          <PanSlider />
        </Block>
  )

  const renderDirectionSection = () => (
    <Block
    column
    style={styles.directionStyles}>
    <Block row space="between">
      <Text welcome color="black">
        Direction
      </Text>
      <Text>{direction}</Text>
    </Block>
    <Slider
      value={20}
      mininumValue={0}
      maximumValue={100}
      thumbTintColor={theme.colors.accent}
      minimumTrackTintColor={theme.colors.accent}
      maximumTrackTintColor={theme.colors.gray2}
      onValueChange={handleDirection}
    />
  </Block>
  )
   return (
    <Card>
    {renderHeader()}
    <CardItem bordered>
      <Body style={styles.body}>
         {renderBrightnessSection()}
          {renderDirectionSection()}
      </Body>
    </CardItem>
  </Card>
    );

}



CurtainCard.defaultProps = {
   
};

export default CurtainCard;

const styles = StyleSheet.create({
    body : {
        alignItems: 'center',
        flex: 1, 
    },
    contentStyle : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
  directionStyles: {
    marginVertical: theme.sizes.base * 2, 
    width: '100%'
  }
});