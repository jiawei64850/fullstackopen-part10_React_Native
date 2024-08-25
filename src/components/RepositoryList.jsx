import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: 'lightgrey'
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  basicBox: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  nestedBasicBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 7,
    marginHorizontal: 5 
  },
  detailsBox: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginVertical: 7,
    paddingVertical: 7
  },
  nestedDetailsBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    flex: 1,
  },
  fullName: {
    marginVertical: 5,
    flexShrink: 1,   
    flexWrap: 'wrap', 
  },
  description: { 
    color: '#666',
    marginRight: 40,
    paddingRight: 40,
    marginVertical: 7,
    flexShrink: 1,  
    flexWrap: 'wrap',
  },
  avatar: {
    width: 30, 
    height: 30,
    alignItems: 'center',
    marginTop: 7
  },
  statNumber: {
    textAlign: 'center'
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center'
  },
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={({item}) => <RepositoryItem {...item} styles={styles}/>
      }
      style={styles.container}
    />
  );
};

export default RepositoryList;