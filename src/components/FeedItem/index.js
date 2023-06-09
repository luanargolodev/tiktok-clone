import { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const { height: HeightScreen } = Dimensions.get("screen");

export function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (currentVisibleItem?.id === data?.id) {
      video.current?.playAsync();
    } else {
      video.current?.pauseAsync();
    }
  }, [currentVisibleItem]);

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }

  return (
    <Pressable onPress={handlePlayer}>
      <View style={styles.info}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="heart" size={35} color="#fff" />
          <Text style={styles.actionsText}>30.3K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff" />
          <Text style={styles.actionsText}>23</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="bookmark" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

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
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
    bottom: 110,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    color: "#fff",
    marginRight: 24,
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions: {
    position: "absolute",
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === "android" ? 120 : 170,
    gap: 8,
  },
  actionsText: {
    textAlign: "center",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
});
