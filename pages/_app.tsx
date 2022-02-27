import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUIThemeProvider } from "next-themes";
import "../storage/index";

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIThemeProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        dark: darkTheme,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextUIThemeProvider>
  );
}

export default MyApp;
