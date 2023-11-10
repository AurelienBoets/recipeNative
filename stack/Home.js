import {useNavigation} from '@react-navigation/native';
import {CATEGORIES} from '../data/data';
import {Text, FlatList, Pressable} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={itemData => {
        <Pressable
          onPress={() =>
            navigation.navigate('List', {category: itemData.item.id})
          }>
          <Text>{itemData.item.title}</Text>
        </Pressable>;
      }}
      keyExtractor={(item, index) => {
        return index;
      }}
    />
  );
};

export default Home;
