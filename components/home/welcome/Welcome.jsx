import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobtype, setActiveJobtype] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Hamxie</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
           style={styles.searchInput}
           value = ""
           onChange = {() => {}}
            placeholder="Search for jobs"
           />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress = {() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style = {styles.tabsContainer}>
         <FlatList 
         data={jobTypes}
         renderItem = {({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeJobtype, item)}
            onPress = {() => {
              setActiveJobtype(item)
              router.push(`/search/${item}`)
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
  )}
         />   
      </View>
    </View>
  )
}

export default Welcome