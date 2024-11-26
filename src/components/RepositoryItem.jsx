import { View, Text } from "react-native";

export default RepositoryItem = ({ itemData }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  } = itemData.item;

  return (
    <View>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{forksCount}</Text>
      <Text>{stargazersCount}</Text>
      <Text>{ratingAverage}</Text>
      <Text> {reviewCount}</Text>
    </View>
  );
};
