import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Filter from '@components/Filter';
import GlobalStyles from '@style/global.styled.ts';
import theme from '@style/theme.ts';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Filter />
        </ThemeProvider>
    );
};

export default App;
