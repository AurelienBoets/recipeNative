import {useRoute} from '@react-navigation/native';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const DetailRecipe = () => {
  const route = useRoute();
  const params = route.params;
  const styles = StyleSheet.create({
    img: {
      width: '100%',
      minHeight: 250,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
      marginBottom: 5,
    },
    container: {
      alignItems: 'center',
    },
    section: {
      color: '#F2D2BD',
      fontSize: 20,
      fontWeight: '600',
    },
    sectionItem: {
      color: 'black',
      textAlign: 'center',
    },
    sectionContainer: {
      width: 300,
      backgroundColor: '#F2D2BD',
      margin: 7,
      fontWeight: '400',
    },
    hr: {
      width: '80%',
      height: 5,
      backgroundColor: '#F2D2BD',
    },
  });
  return (
    <View style={styles.container}>
      <Image source={{uri: params.imageUrl}} style={styles.img} />

      <Text style={styles.title}>{params.title}</Text>
      <Text>
        {params.duration}m {params.complexity.toUpperCase()}{' '}
        {params.affordability.toUpperCase()}
      </Text>
      <Text style={styles.section}>Ingredients</Text>
      <View style={styles.hr} />
      <FlatList
        data={params.ingredients}
        renderItem={({item}) => {
          return (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionItem}>{item}</Text>
            </View>
          );
        }}
      />
      <Text style={styles.section}>Steps</Text>
      <View style={styles.hr} />
      <FlatList
        data={params.steps}
        renderItem={({item}) => {
          return (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionItem}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DetailRecipe;
