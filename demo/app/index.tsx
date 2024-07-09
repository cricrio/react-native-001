import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Machin = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState<string>();

  return (
    <View>
      <TextInput
        value={text}
        onChange={(e) => console.log(e)}
        onChangeText={(text) => setText(text)}
        style={{ borderColor: 'black' }}
      />
      <Button
        onPress={() => {
          if (text) {
            onAdd(text);
            setText('');
          }
        }}
      >
        Add in list
      </Button>
    </View>
  );
};

export default function Index() {
  const [texts, setTexts] = useState('');
  const addText = (text: string) => setTexts((t) => `${t} ${text}`);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Machin onAdd={addText} />
      <Text>Vous avez écrit: {texts}</Text>
    </View>
  );
}
