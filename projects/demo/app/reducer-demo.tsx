import { useReducer } from 'react';
import { Button, Text, View } from 'react-native';

const actions = {
  INCREMENT: 'inc',
  DECREMENT: 'des',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + action?.payload?.step ?? 1 };
    case actions.DECREMENT:
      return { ...state, counter: state.counter - 1 };
  }

  return state;
};

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        onPress={() =>
          dispatch({ type: actions.INCREMENT, payload: { step: 5 } })
        }
        title='INC'
      />
      <Button
        onPress={() => dispatch({ type: actions.DECREMENT })}
        title='DES'
      />
      <Text style={{ color: 'black' }}>{state.counter}</Text>
    </View>
  );
}
