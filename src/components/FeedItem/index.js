import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { Video } from "expo-av";

const { height: HeightScreen } = Dimensions.get("screen");

export function FeedItem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }

  return (
    <Pressable onPress={handlePlayer}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: HeightScreen,
  },
});
