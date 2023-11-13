import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/data';
import {FlatList, View, Image, Text, Pressable, StyleSheet} from 'react-native';

const ListRecipe = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = MEALS.filter(meal =>
    meal.categoryIds.includes(route.params.category),
  );

  const styles = StyleSheet.create({
    img: {
      width: '100%',
      minHeight: 225,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
    },
    imgContainer: {
      width: '100%',
    },
    container: {
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
    },
    list: {
      width: '100%',
      minHeight: '100%',
    },
    card: {
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '90%',
      borderRadius: 5,
      marginTop: 15,
    },
    cardTitle: {
      fontSize: 25,
      fontWeight: '500',
      color: '#848884',
      marginTop: 5,
    },
    cardSubTitle: {
      marginVertical: 5,
      color: 'black',
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={itemData => {
          return (
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate('Detail', itemData.item)}>
              <View style={styles.imgContainer}>
                <Image
                  source={{uri: itemData.item.imageUrl}}
                  style={styles.img}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>{itemData.item.title}</Text>
              </View>
              <View>
                <Text style={styles.cardSubTitle}>
                  {itemData.item.duration}m{' '}
                  {itemData.item.complexity.toUpperCase()}{' '}
                  {itemData.item.affordability.toUpperCase()}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default ListRecipe;
