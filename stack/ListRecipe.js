import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/data';
import {FlatList, View, Image, Text, Pressable} from 'react-native';

const ListRecipe = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = MEALS.filter(meal =>
    meal.categoryIds.includes(route.params.category),
  );
  return (
    <FlatList
      data={data}
      renderItem={itemData => {
        <Pressable onPress={() => navigation.navigate('Detail', itemData.item)}>
          <View>
            <Image source={{uri: itemData.item.imageUrl}} />
          </View>
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
          <View>
            <Text>
              {itemData.item.duration} {itemData.item.complexity}{' '}
              {itemData.item.affordability}
            </Text>
          </View>
        </Pressable>;
      }}
    />
  );
};

export default ListRecipe;
