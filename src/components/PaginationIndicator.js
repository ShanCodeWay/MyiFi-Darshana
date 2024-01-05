import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles as PaginationIndicatorStyles } from "./styles/PaginationIndicatorStyle ";

const PaginationIndicator = (props) => {
  useEffect(() => {
    // componentDidMount equivalent
    return () => {
      // componentWillUnmount equivalent
    };
  }, []);

  const renderPaginationCircles = () => {
    const totalScreens = 5;
    const activeScreen = props.pageNumber - 1;

    return Array.from({ length: totalScreens }, (_, index) => (
      <View
        key={index}
        style={[
          PaginationIndicatorStyles.circle,
          index === activeScreen
            ? PaginationIndicatorStyles.activeCircle
            : PaginationIndicatorStyles.inactiveCircle,
        ]}
      />
    ));
  };

  return (
    <View style={PaginationIndicatorStyles.paginationIndicatorContainer}>
      <View style={PaginationIndicatorStyles.paginationIndicator}>
        {renderPaginationCircles()}
      </View>

      <Text style={PaginationIndicatorStyles.titleText}>{props.text}</Text>
    </View>
  );
};

export default PaginationIndicator;
