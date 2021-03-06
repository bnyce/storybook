import '../src/index.css';
import '../src/components/Reservation.css';
import '../src/components/MaterialIcons.css';
import '../src/components/uswds.css';
import '../src/components/siteHeader.css';
import '../src/components/links.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
