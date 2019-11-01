import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

const ImageClone = ({ style, uri, onPress }) => {
  const [loader, setLoader] = useState(false);
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%"
    },
    container: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    loader: {
      position: "absolute"
    }
  });

  const showImage = () => {
    if (!loader) {
      if (uri !== undefined || uri !== "") {
        onPress(uri);
      }
    }
  };

  return (
    <TouchableOpacity onPress={showImage} style={styles.container}>
      <Image
        onLoadStart={() => setLoader(true)}
        onLoad={() => setLoader(false)}
        defaultSource={require("./assets/default-img.png")}
        style={[styles.image, style]}
        source={{ uri }}
      />
      {loader && (
        <ActivityIndicator size={10} color="#e3e3e3" style={styles.loader} />
      )}
    </TouchableOpacity>
  );
};

export default ImageClone;
