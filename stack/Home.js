import {useNavigation} from '@react-navigation/native';
import {CATEGORIES} from '../data/data';
import {Text, FlatList, Pressable, View, StyleSheet} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    list: {
      width: '100%',
    },
    item: {
      flex: 1,
      margin: 5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 4,
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 8,
    },
    containerItem: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textItem: {
      textStyling: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
      },
    },
  });
  return (
    <View>
      <FlatList
        style={styles.list}
        data={CATEGORIES}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Pressable
              style={[styles.item, {backgroundColor: item.color}]}
              onPress={() => navigation.navigate('List', {category: item.id})}>
              <View style={styles.containerItem}>
                <Text style={styles.textItem}>{item.title}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  );
};

export default Home;
