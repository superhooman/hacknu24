"use client";

import { env } from "@src/env";
import { TRPCReactProvider } from "@src/trpc/react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Theme } from "@radix-ui/themes";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <TRPCReactProvider>
      <Theme
        accentColor="amber"
        grayColor="mauve"
        panelBackground="solid"
        radius="large"
        appearance="dark"
      >
        <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          {children}
        </APIProvider>
      </Theme>
    </TRPCReactProvider>
  );
};
