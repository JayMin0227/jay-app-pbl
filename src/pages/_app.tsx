



// import { ChakraProvider } from "@chakra-ui/react";

// import { extendTheme} from '@chakra-ui/react'

// const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'red' }))



// const theme = extendTheme({
//   // カスタムテーマ設定（必要に応じて追加）
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// /home/jaymin/project/jay-project/src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
