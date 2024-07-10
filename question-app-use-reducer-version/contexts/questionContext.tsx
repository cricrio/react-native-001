import type { Question } from '@/types';
import { randomId } from '@/utils';
import { createContext, useContext, useReducer, type ReactNode } from 'react';

const actions = {
  ADD: 'add',
  DELETE: 'delete',
  UPDATE: 'update',
};

type AddAction = { type: 'ADD'; payload: { question: Question } };
type UpdateAction = { type: 'UPDATE'; payload: { question: Question } };
type DeleteAction = { type: 'DELETE'; payload: { questionId: Question['id'] } };

export type Action = AddAction | UpdateAction | DeleteAction;

interface ContextShape {
  questions: Question[];
  dispatch: (action: Action) => void;
}

const context = createContext<ContextShape>({
  questions: [],
  dispatch: (action: Action) => {},
});

type State = {
  questions: Question[];
};

const reducerHandlers = {
  [actions.ADD]: (state: State, action: AddAction): State => ({
    ...state,
    questions: [action.payload.question, ...state.questions],
  }),
  [actions.UPDATE]: (state: State, action: UpdateAction): State => ({
    ...state,
    questions: state.questions.map((item) =>
      item.id === action.payload.question.id ? action.payload.question : item
    ),
  }),
  [actions.DELETE]: (state: State, action: DeleteAction): State => ({
    ...state,
    questions: state.questions.filter((item) =>
      item.id !== action.payload.questionId ? action.payload.questionId : item
    ),
  }),
};

const reducer = (state: State, action: Action): State => {
  const handler = reducerHandlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};

export const useQuestions = () => {
  return useContext(context);
};

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [{ questions }, dispatch] = useReducer(reducer, {
    questions: [],
  });

  return (
    <context.Provider value={{ questions, dispatch }}>
      {children}
    </context.Provider>
  );
};

export const addQuestion = (dispatch) => (question: Omit<Question, 'id'>) =>
  dispatch({
    type: actions.ADD,
    payload: {
      question: {
        ...question,
        id: randomId(),
      },
    },
  });

export const updateQuestion = (dispatch) => (question: Question) =>
  dispatch({
    type: actions.UPDATE,
    payload: {
      question,
    },
  });

export const deleteQuestion = (dispatch) => (questionId: Question['id']) => {
  dispatch({
    type: actions.DELETE,
    payload: {
      questionId,
    },
  });
};