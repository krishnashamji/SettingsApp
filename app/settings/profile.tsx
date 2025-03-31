import { ScrollView, Text, StyleSheet} from "react-native";



export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <Text >Settings</Text>
        </ScrollView>
    )
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

})