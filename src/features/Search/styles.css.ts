import { keyframes, style } from '@vanilla-extract/css';

import { media } from '@src/styles/breakpoints';

export const flex = style({
    minWidth: 0,
});

export const overflow = style({
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
});

export const scrollArea = style({
    flexGrow: 1,
    maxWidth: '100vw',

    '@media': {
        [media.up('sm')]: {
            maxWidth: 'unset',
            maxHeight: 'calc(100vh - 120px)',
        }
    }
});

export const itemRoot = style({
    minWidth: 0,
    padding: 'var(--space-2)',
    margin: 'calc(-1 * var(--space-2))',
    cursor: 'pointer',
    borderRadius: 'var(--radius-3)',

    ':hover': {
        backgroundColor: 'var(--gray-a3)',
    },

    ':active': {
        transform: 'scale(0.98)',
    }
});

const triggerIntro = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    }
});

export const trigger = style({
    animation: `${triggerIntro} 200ms ease-out`,
    flexGrow: 1,
    '@media': {
        [media.down('xs')]: {
            flexGrow: 0,
            width: 'fit-content',
            backgroundColor: 'transparent',
            paddingLeft: 'var(--space-2)',
            paddingRight: 'var(--space-2)',
        }
    }
});


export const triggerText = style({
    '@media': {
        [media.down('xs')]: {
            display: 'none',
        }
    }
});

