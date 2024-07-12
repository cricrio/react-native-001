import { render, userEvent, screen } from '@testing-library/react-native';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

jest.useFakeTimers();

interface Props {
  name: string;
  onSubmit: (text: string) => void;
}

function TestComponentDemo({ name, onSubmit }: Props) {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput testID='input' value={text} onChangeText={setText} />
      <Text testID='text'>
        {text ? `${text}, ${name}` : `Bonjour, ${name}`}
      </Text>
      <Button
        testID='button'
        disabled={!text}
        onPress={() => onSubmit(text)}
        title='Submit'
      />
    </View>
  );
}

test('Should display the correct text at render', () => {
  const { getByText } = render(
    <TestComponentDemo name='Martin' onSubmit={() => {}}></TestComponentDemo>
  );

  const text = getByText('Bonjour, Martin');
  expect(text).toBeTruthy();
});

test('Should display the correct text after the user has type', async () => {
  const user = userEvent.setup();

  render(
    <TestComponentDemo name='Martin' onSubmit={() => {}}></TestComponentDemo>
  );

  const input = screen.getByTestId('input');

  //Typing is asynchrone, it should be  waited
  await user.type(input, 'En revoir');

  const text = screen.getByText('En revoir, Martin');
  expect(text).toBeTruthy();
});

test('Button should be disabled', async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn(() => {});
  render(
    <TestComponentDemo name='Martin' onSubmit={onSubmit}></TestComponentDemo>
  );

  const button = screen.getByTestId('button');

  await user.press(button);

  expect(onSubmit).not.toHaveBeenCalled();
});

test('Button should be enable after user had type', async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn(() => {});
  render(
    <TestComponentDemo name='Martin' onSubmit={onSubmit}></TestComponentDemo>
  );

  const button = screen.getByTestId('button');
  const input = screen.getByTestId('input');

  await user.type(input, 'ByBy');
  await user.press(button);

  expect(onSubmit).toHaveBeenCalledWith('ByBy');
});
