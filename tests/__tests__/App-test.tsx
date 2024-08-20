import { render } from '@testing-library/react-native';


import App from '../App'

describe('<App />', () => {
    test('Text renders correctly on HomeScreen', () => {
        const app = render(<App/>)
        expect(app.getByText("Open up App.js to start working on your app!")).toBeTruthy()

    })

})