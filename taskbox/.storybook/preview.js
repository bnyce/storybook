import '../src/index.css';
import '../src/components/Reservation.css';
import '../src/components/Footer.css';


module.exports = {
  decorators: []
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
