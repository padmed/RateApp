import { FlatList, View, StyleSheet } from "react-native";
import data from "../../data";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => <RepositoryItem itemData={item}></RepositoryItem>}
    />
  );
};

export default RepositoryList;
