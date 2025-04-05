import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useRouter } from 'expo-router';
import { LISTONEDATA } from "@/constants/constants"
import { styles } from "@/styles/styles"


export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Settings</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={LISTONEDATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItemContainer}
              onPress={() => router.push(item.href as any)}
            >
              <Image source={item.icon} style={styles.itemIcon} />
              <Text style={[styles.itemText, styles.h6]}>{item.title}</Text>
            </TouchableOpacity>
          )}
          estimatedItemSize={5}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </ScrollView>
  );
}

