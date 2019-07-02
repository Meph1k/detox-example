import React from 'react';
import { Router, Scene, Stack, Lightbox, Drawer } from 'react-native-router-flux';
import DifficultyLevel from 'src/screens/difficulty-level';
import Question from 'src/screens/question';
import Results from 'src/screens/results';
import ChoiceOfGame from 'src/screens/choice-of-game';
import Capitals from 'src/screens/capitals';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import Back, { ConnectedBackToChoice as BackToChoice } from 'src/components/back';
import HiddenDevMenu from 'src/screens/hidden-dev-menu';
import DrawerMenu from 'src/components/drawer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Lightbox>
            <Stack key="root">
              <Drawer
                key="drawer"
                drawer
                contentComponent={DrawerMenu}
                drawerWidth={250}
                hideNavBar
              >
                <Scene key="initial" component={DifficultyLevel} title="Difficulty level" />
              </Drawer>
              <Scene key="choice-of-game" component={ChoiceOfGame} title="Choice of game" />
              <Scene
                key="question"
                component={Question}
                title="Question"
                renderBackButton={Back}
              />
              <Scene
                key="capitals"
                component={Capitals}
                title="Capitals"
                renderBackButton={Back}
              />
              <Scene
                key="results"
                component={Results}
                title="Results"
                renderBackButton={() => <BackToChoice />}
              />
            </Stack>
            <Scene
              key="hidden-dev-menu"
              component={HiddenDevMenu}
            />
          </Lightbox>
        </Router>
      </Provider>
    );
  }
}

export default App
