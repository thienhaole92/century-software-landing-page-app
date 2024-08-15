import router from './router';
import CustomThemeProvider from './theme/CustomThemeProvider';
import { useRoutes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  const content = useRoutes(router);

  return (
    <CustomThemeProvider>
      <CssBaseline />
      {content}
    </CustomThemeProvider>
  );
}

export default App;
