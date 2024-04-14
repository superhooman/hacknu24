'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { Theme } from '@radix-ui/themes';
import { IconContext } from '@phosphor-icons/react';

import { env } from '@src/env';
import { TRPCReactProvider } from '@src/trpc/react';

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
                <IconContext.Provider value={{ weight: 'bold', size: 16 }}>
                    <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                        {children}
                    </APIProvider>
                </IconContext.Provider>
            </Theme>
        </TRPCReactProvider>
    );
};
