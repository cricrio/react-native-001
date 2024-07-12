# Test avec Expo et React Native Testing Librairy

## Installation et configuration

Installer les dépendances dans le projet

```sh
npx expo install -- --save-dev jest-expo jest
npm install -D @testing-library/react-native
```

Si utilisation de typescript, installer `@types/jest` en dev dependance.

Modifier le **package.json** pour ajouter un script pour lancer les test et ajouter le preset pour utiliser la configuration de base de `jest-expo`.

```json
"scripts": {
//  ...
  "test": "jest"
},
// ...
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]
}
```

## Utilisation

## Composant

```tsx
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
```

### Tester si un element appairait bien

```tsx
import { render, } from '@testing-library/react-native';

test('Should display the correct text at render', () => {
  const { getByText } = render(
    <TestComponentDemo name='Martin' onSubmit={() => {}}></TestComponentDemo>
  );

  const text = getByText('Bonjour, Martin');
  expect(text).toBeTruthy();
});
```
ou

```tsx
import { render, screen } from '@testing-library/react-native';

test('Should display the correct text at render', () => {
  const { getByText } = render(
    <TestComponentDemo name='Martin' onSubmit={() => {}}></TestComponentDemo>
  );

  const text = screen.getByText('Bonjour, Martin');
  expect(text).toBeTruthy();
});
```

### Simuler une utilisateur

Les actions simulées sont asynchrone.

#### Typing

```tsx
import { render, userEvent ,screen } from '@testing-library/react-native';

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
```

#### Pressing et mock de fonction

Dans le test suivant, on va mocker la fonction `onSubmit` à l'aide de `jest.fn`. Mocker un fonction permettra ensuite de savoir ensuite si elle a été appelée.
Le test échoura si la fonction `onSubmit` est appelée par le composant.


```tsx
test('Button should be disabled', async () => {
  const user = userEvent.setup();
  //Mocker la function
  const onSubmit = jest.fn(() => {});
  render(
    <TestComponentDemo name='Martin' onSubmit={onSubmit}></TestComponentDemo>
  );

  const button = screen.getByTestId('button');

  await user.press(button);

  expect(onSubmit).not.toHaveBeenCalled(); // expect va throw une error si la function a été utiliser
});

```
Le test suivant échoura si la fonction est appelée avec d'autres arguments que 'ByBy' ou si la fonction n'est pas appellé.

```tsx
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
```
## Articles

https://reactnative.dev/docs/testing-overview
https://www.notjust.dev/blog/2023-01-16-react-native-testing
https://dev.to/tiaeastwood/how-to-test-an-image-component-using-react-native-testing-library-3on4

## Documentation

React Native Testing Librairy: react
Mocking library https://mswjs.io/docs/integrations/react-native

