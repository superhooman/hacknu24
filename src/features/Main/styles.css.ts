import { globalStyle, style } from '@vanilla-extract/css';

import { media } from '@src/styles/breakpoints';

export const root = style({
    width: '100%',
    height: '100dvh',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
});

globalStyle(`${root} .gm-style iframe + div`, {
    border: 'none!important',
});

globalStyle(`${root} > div`, {
    backgroundColor: 'transparent!important',
});

export const dot = style({
    backgroundColor: 'var(--accent-9)',
    borderRadius: '50%',
    width: 'var(--space-4)',
    height: 'var(--space-4)',
    border: '2px solid var(--accent-12)',
    boxShadow: 'var(--shadow-3)',
    zIndex: 1,
});

export const badge = style({
    position: 'absolute',
    top: 'calc(-1.5 * var(--space-1))',
    right: 'calc(-1.5 * var(--space-1))',
});

export const card = style({
    position: 'absolute',
    top: 'var(--space-4)',
    left: 'var(--space-4)',
    minWidth: 400,
    zIndex: 1,
    backdropFilter: 'blur(10px)',

    '@media': {
        [media.down('sm')]: {
            width: 'calc(100% - var(--space-4) * 2)',
            minWidth: 'unset',
        }
    },

    ':before': {
        opacity: 0.8,
    }
});

export const text = style({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

export const item = style({
    borderTop: '1px solid var(--gray-a6)',
    minHeight: 64,
});
