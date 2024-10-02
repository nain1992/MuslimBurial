import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Chatpage/Outgoing";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

const Outgoing = (props) => {
  let { msgoutgoing, audio, image, color } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const dummyAudio =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playAudio = async () => {
    try {
      if (!isPlaying) {
        const { sound: newSound } = await Audio.Sound.createAsync({
          uri: dummyAudio,
        });
        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);

        newSound.setOnPlaybackStatusUpdate((status) => {
          if (!status.isPlaying) {
            setIsPlaying(false);
            newSound.unloadAsync();
            setSound(null);
          }
        });
      } else {
        stopAudio();
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const stopAudio = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setIsPlaying(false);
        setSound(null);
      }
    } catch (error) {
      console.error("Error stopping audio:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.senderpic}></View>
      <View
        style={[
          styles.msgbody,
          {
            backgroundColor: color ? "#EB5757" : "#323FA6",
          },
        ]}
      >
        {audio ? (
          <View style={styles.audiocontainer}>
            <TouchableOpacity onPress={playAudio}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={15}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={styles.textmsg}>
              {isPlaying ? "Playing..." : "Audio message"}
            </Text>
          </View>
        ) : (
          <View style={styles.textbody}>
            <Text style={styles.textmsg}>{msgoutgoing}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Outgoing);
