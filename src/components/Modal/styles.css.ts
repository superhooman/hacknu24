import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoints, media } from '@src/styles/breakpoints';

globalStyle('.rt-DialogOverlay', {
    '@media': {
        [media.down('xs')]: {
            padding: 0,
        }
    }
});

export const vaul = style({
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,

    '::before': {
        content: '""',
        position: 'fixed',
        display: 'block',
        top: 'var(--space-2)',
        height: 'var(--space-2)',
        width: 'var(--space-8)',
        backgroundColor: 'var(--gray-a6)',
        left: 'calc(50% - var(--space-4))',
        borderRadius: 'var(--radius-4)',
        zIndex: 1,
    },

    '::after': {
        backgroundColor: 'var(--color-panel)',
    }
});

export const vaulInner = style({
    borderTopLeftRadius: 'var(--radius-4)',
    borderTopRightRadius: 'var(--radius-4)',
    overflow: 'hidden',
    backgroundColor: 'var(--color-panel-solid)',
    boxShadow: '0 0 0 1px var(--gray-a6)',
    padding: 'var(--space-4)',
    paddingTop: 'var(--space-6)',
});

export const vaulOverlay = style({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to bottom, var(--black-a1) 0%, var(--black-a12) 100%)',
    zIndex: 999,
});

export const content = style({
    vars: {
        '--color-panel': 'var(--color-panel-solid)',
    },

    backgroundColor: 'var(--color-panel)',

    '@media': {
        [media.up('sm')]: {
            selectors: {
                ...(Object.entries(breakpoints).reduce((acc, [key, value]) => ({
                    ...acc,
                    [`&[data-width="${key}"]`]: {
                        maxWidth: value,
                    },
                }), {})),
            }
        },
        [media.down('sm')]: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            maxHeight: 'unset',
            height: '100dvh',
            borderRadius: 0,
            maxWidth: '100%!important',
        },
    }
});

globalStyle('.rt-BaseDialogOverlay .rt-BaseDialogScrollPadding', {
    padding: 0,
});
