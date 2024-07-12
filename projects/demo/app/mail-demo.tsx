import * as MailComposer from 'expo-mail-composer';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function DemoMail() {
  const [isMailAvailable, setMailAvailable] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    content: '',
    name: '',
  });

  useEffect(() => {
    MailComposer.isAvailableAsync().then(setMailAvailable);
  }, []);

  const sendMail = async () => {
    const { name, content, email } = formData;
    await MailComposer.composeAsync({
      recipients: ['christopher@gmail.com'],
      subject: `Devis from demo app`,
      body: `${name} vous a envoyé une demande de devis. Voici sa demande: ${content}. Vous pouvez le contacter via cette email: ${email}`,
    });
  };

  if (isMailAvailable) {
    const inputHandler =
      (name: 'email' | 'name' | 'content') => (value: string) =>
        setFormData((data) => ({ ...data, [name]: value }));
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          label='email'
          textContentType='emailAddress'
          value={formData.email}
          onChangeText={inputHandler('email')}
        />
        <TextInput
          label='name'
          value={formData.name}
          onChangeText={inputHandler('name')}
        ></TextInput>
        <TextInput
          multiline
          label='content'
          value={formData.content}
          onChangeText={inputHandler('content')}
        />
        <Button onPress={() => sendMail()}>Send Mail</Button>
      </View>
    );
  }
  return <Text>Mail not available</Text>;
}
