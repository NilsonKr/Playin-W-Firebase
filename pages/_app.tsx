import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextUIThemeProvider } from "next-themes";
import { UserContextProvider } from "../context/UserContext";
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
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </NextUIProvider>
    </NextUIThemeProvider>
  );
}

export default MyApp;
