import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { SFProFontFamily } from '../config/customFont'
import { FlashList } from "@shopify/flash-list";

const LISTONEDATA = [
  {
    title: "AirPlane Mode",
    icon: require('../assets/icons/AirPlane_Mode_Icon.png'),
  },
  {
    title: "Wi-Fi",
    icon: require('../assets/icons/Wi-Fi_Icon.png'),
  },
  {
    title: "Bluetooth",
    icon: require('../assets/icons/Bluetooth_Icon.png'),
  },
  {
    title: "Cellular",
    icon: require('../assets/icons/Cellular_Icon.png'),
  },
  {
    title: "Personal Hotspot",
    icon: require('../assets/icons/Personal_Hotspot_Icon.png'),
  },
  {
    title: "Battery",
    icon: require('../assets/icons/Battery_Icon.png'),
  },
  {
    title: "VPN",
    icon: require('../assets/icons/VPN_Icon.png'),
  }
];

console.log(LISTONEDATA[0].icon);

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Settings</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={LISTONEDATA}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Image source={item.icon} style={styles.itemIcon} />
              <Text style={[styles.itemText, styles.h6]}>{item.title}</Text>
            </View>
          )}
          estimatedItemSize={5}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  // Containers
  container: {
    flex: 1,
    paddingTop: 48,
    paddingRight: 12,
    paddingBottom: 48,
    paddingLeft: 12,
  },

  //List
  listContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 12,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 28,
    height: 28,
    marginHorizontal: 16,
  },
  itemText: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
    borderStyle: 'solid',
    width: '100%',
  },

  // Headings
  h1: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_BOLD,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_BOLD,
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_SEMIBOLD,
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_SEMIBOLD,
    fontSize: 20,
    lineHeight: 28,
  },
  h5: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_MEDIUM,
    fontSize: 18,
    lineHeight: 26,
  },
  h6: {
    fontFamily: SFProFontFamily.SF_PRO_DISPLAY_MEDIUM,
    fontSize: 16,
    lineHeight: 24,
  },

  // Body Text
  bodyLarge: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_REGULAR,
    fontSize: 18,
    lineHeight: 28,
  },
  bodyMedium: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_REGULAR,
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    lineHeight: 22,
  },

  // Labels & Captions
  label: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_SEMIBOLD,
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },

  // Buttons
  button: {
    fontFamily: SFProFontFamily.SF_PRO_TEXT_BOLD,
    fontSize: 16,
    lineHeight: 24,
  }
});