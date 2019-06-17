import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import DifficultyLevel from 'src/screens/difficulty-level';
import Question from 'src/screens/question';
import Results from 'src/screens/results';
import ChoiceOfGame from 'src/screens/choice-of-game';
import Capitals from 'src/screens/capitals';
import { Provider } from 'react-redux';
import { store } from 'src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="initial" component={DifficultyLevel} title="Difficulty level" />
            <Scene key="choice-of-game" component={ChoiceOfGame} title="Choice of game" />
            <Scene key="question" component={Question} title="Question" />
            <Scene key="capitals" component={Capitals} title="Capitals" />
            <Scene key="results" component={Results} title="Results" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App
