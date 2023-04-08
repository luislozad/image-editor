import { useEffect, memo } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ImagenEditor } from './ImagenEditor';
// import chakraTheme from '@chakra-ui/theme';
import { useSubscribe } from '@logic/subscriptions';
import { theme } from './theme';
import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/500.css';
import 'index.css';
import 'tippy.js/dist/tippy.css'; // optional

const App = memo(() => {
  useEffect(() => {
    const unSubscribe = useSubscribe();

    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ImagenEditor />      
    </ChakraProvider>
  )
});

export default App
