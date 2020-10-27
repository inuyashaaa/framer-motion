import Reactotron from 'reactotron-react-js'

Reactotron
  .configure({
    port: 6969
  }) // we can use plugins here -- more on this later
  .connect() // let's connect!
