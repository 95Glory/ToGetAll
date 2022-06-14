// import React from "react";
// import Head from "next/head";
// import Layout from "../Components/Layout";

// //https://github.com/nextauthjs/next-auth/issues/210(오류 참고)
// // import { Provider } from "next-auth/client";
// // https://github.com/nextauthjs/next-auth/issues/210(참고)
// import { SessionProvider  } from "next-auth/react"

// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <title>Kakao Naver Login NextAuthJS Prisma App</title>
//       </Head>
//       <SessionProvider session={pageProps.session}>
//         <ChakraProvider resetCSS>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </ChakraProvider>
//       </SessionProvider>
//     </>
//   );
// }
// export default MyApp;


import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
                <script>Kakao.init('4726d1b7b9554043080c881a67c1b7f1')</script> {/* JavsScript 키 입력 */}
            </Head>

            <Component {...pageProps} />
        </>
    )
};

export default App;