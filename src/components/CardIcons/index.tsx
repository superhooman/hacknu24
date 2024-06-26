interface Props extends React.ComponentProps<'svg'> {
  size?: number;
}

export const KaspiGoldCardIcon: React.FC<Props> = ({ size, ...props }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 150"
            height={size}
            {...props}
        >
            <rect width={240} height={150} rx={16} fill="url(#kaspigold)" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.2 78.5c8.6 1.3 9.8 6.4 10.5 11l.1.9v.6l.5 2.7c.8 5.4 2.5 16.4 2.5 22.1a10 10 0 01-.3 3.2c-.4 1-1.5 1.8-3 2.6a49 49 0 01-11.8 1.4h-1.3a6.5 6.5 0 01-3.5-2.3c-2-3.2-2-10.3-2.1-18.7v-3.4c0-8.8-.1-16.4 3-19.1 1.3-1 3-1.4 5.4-1zm-18.7 19.1c1.9 0 3 9 3.3 16 .2 4.9-.3 6.8-1.1 7.6l-2.7-1a18 18 0 01-1.4-5c-.9-7-.1-17.5 2-17.6zm46.7 13.7l-.5 1.5a45.6 45.6 0 01-5 3.6c-.6 0-1 0-1.3-.4-2.3-4.1-3.2-16.9-1-18 3-1.4 8.2 11 7.8 13.3zM120 27a47.8 47.8 0 0148 46.5v1.3a47 47 0 01-11.4 30.5c-.2-.1-.7-.6-1.6-1.8a51.7 51.7 0 01-8.4-26.2c0-2.6 3.8-6.7 7.1-10.3 2.5-2.7 4.9-5.2 5.7-7.2 1.1-2.6.4-4.4-.9-5-1-.6-2.7-.2-3.9 1.9-2 3.4-2.5 4-5.3 6.2-2.8 2.3-7.1 4.5-7.1 1.6 0-1.6 2.4-5.1 3.6-7.7 1.2-2.5-.1-4.3-2.6-4.3-5 0-8.3 6.3-8.3 8.5s1 2.5 1 5c0 2.7-5.4 6-10.6 6-5 0-7.8-1-9-3.8l-.2-.4-.3-1c-1.2-3.6-2-6.2-3.6-8.9-.8-1.4-2-2.4-3.2-3.3a5.6 5.6 0 01-2.3-2.9c-.1-.7-.2-2.1 2.2-5.4 2.4-3.2 2.8-5.6 1.6-6.9-.5-.4-1.2-.7-2.2-.7-1.7 0-4 .9-6.4 3.3-3.8 3.9-1.7 7.6-1.7 9.2 0 1.6-.6 2.5-3 4.7-2.2 2.2-3 4-3.2 11.6-.1 4-.8 6.2-1.4 8.2a18.7 18.7 0 00-.2 12 45.3 45.3 0 01.7 21.8l-.2 1.2v.3c-.3.9-.5 1.8-.8 2.2A47.3 47.3 0 01120 27z"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="kaspigold"
                    x1={233.5}
                    y1={150}
                    x2={0}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D2B076" />
                    <stop offset={1} stopColor="#F2CF8E" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const ForteBlackCardIcon: React.FC<Props> = ({ size, ...props }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 150"
            height={size}
            {...props}
        >
            <rect width={240} height={150} rx={16} fill="url(#forteblack)" />
            <path
                d="M167.7 69.9A3 3 0 00165 68h-8.2a2.8 2.8 0 00-2 .8c-5.1 4.6-11 6.7-17.7 6.4-12-.8-20.8-9.9-20.7-21 0-8.4 6.9-15.1 15.4-15.1a12 12 0 019 4.2c.5.4 1 1.2 1.4 2a3 3 0 010 2 3.2 3.2 0 01-3.8 1.9v-.1a8.9 8.9 0 00-11.2 5.2 8.8 8.8 0 003 10l.2.2.4.3c4.4 2.4 9.7 2.6 14.1.5 5.2-2.6 8.9-7.8 9.8-14 .9-5.7-.8-11.4-4.6-15.9A24.1 24.1 0 00132 27h-.4c-15 0-27.2 12.2-27.3 27.1 0 3 .3 5.8 1 8.6l-1.5-.1c-12.2-.8-23 4.2-31 14.3a2.9 2.9 0 00-.4 3.2A3 3 0 0075 82h8.3c.8 0 1.5-.3 2-.8a23 23 0 0117.7-6.4c11.9.8 20.8 9.8 20.6 21 0 8.4-6.8 15.1-15.4 15.1-3.4 0-6.9-1.6-9-4.2a9 9 0 01-1.3-2c-.3-.7-.3-1.4 0-2a3.2 3.2 0 013.7-1.9c1 .4 2 .6 3 .6 3.7 0 7-2.3 8.3-5.7a8.9 8.9 0 00-2.6-9.7c-.1-.2-.2-.2-.4-.3l-.2-.2h-.1c0-.2-.2-.2-.4-.3a15.2 15.2 0 00-14.1-.5 18.6 18.6 0 00-9.8 14c-.9 5.7.8 11.3 4.7 15.9a24.4 24.4 0 0018 8.5h.4c15 0 27.2-12.2 27.4-27.1 0-3-.4-6-1-8.7l1.5.1 2.4.1a36 36 0 0028.6-14.3 3 3 0 00.4-3.2z"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="forteblack"
                    x1={0}
                    y1={2.9}
                    x2={211}
                    y2={176}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0D0D0D" />
                    <stop offset={0.3} />
                    <stop offset={0.5} stopColor="#393939" />
                    <stop offset={0.5} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const HalykCardIcon: React.FC<Props> = ({ size, ...props }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 150"
            height={size}
            {...props}
        >
            <rect width={240} height={150} rx={16} fill="#08764D" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146 64.2a33.7 33.7 0 01-26 12.3 14.6 14.6 0 00-10.8 24.5l10.8 10.7L156.8 75 146 64.2zM94 85.8a33.7 33.7 0 0126-12.3A14.6 14.6 0 00130.8 49L120 38.2 83.2 75 94 85.8zM78 75l16-16V49h10l16-16 16 16h10v10l16 16-16 16v10h-10l-16 16-16-16H94V91L78 75z"
                fill="#fff"
            />
        </svg>
    );
};

export const SimplyCardIcon: React.FC<Props> = ({ size, ...props }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 150"
            height={size}
            {...props}
        >
            <rect width={240} height={150} rx={16} fill="#000" />
            <path
                d="M196.7 61.4l-16.4 38.5h-8.6l6-13.3L167 61.4h8.9l6 16.3 6-16.3h8.7zM137.1 65a8.7 8.7 0 013.2-2.9 10 10 0 014.9-1.1 10.8 10.8 0 0110 6.3c1 2 1.5 4.4 1.5 7 0 2.8-.5 5.2-1.6 7.2-1 2-2.3 3.6-4 4.7a11.3 11.3 0 01-6 1.7 10 10 0 01-4.8-1.1 8.8 8.8 0 01-3.2-3V100h-8V61.4h8V65zm11.4 9.4c0-2-.5-3.6-1.7-4.7a5.4 5.4 0 00-4-1.7c-1.6 0-3 .6-4.1 1.7a6.6 6.6 0 00-1.6 4.7c0 2 .5 3.6 1.6 4.8a5.5 5.5 0 004 1.7c1.7 0 3-.6 4.1-1.7a6.7 6.7 0 001.7-4.8zm-33.3-13.3c3.3 0 5.8 1 7.7 3 2 2 3 4.6 3 8.1v15.3h-8V73.3c0-1.7-.5-3-1.4-3.9-.9-.9-2-1.4-3.6-1.4s-2.8.5-3.7 1.4c-1 1-1.3 2.2-1.3 4v14.1h-8V73.3c0-1.7-.5-3-1.4-3.9-.8-.9-2-1.4-3.6-1.4s-2.8.5-3.7 1.4c-.9 1-1.3 2.2-1.3 4v14.1h-8V61.4h8v3.3c.8-1.1 1.9-2 3.2-2.6 1.3-.7 2.8-1 4.4-1 2 0 3.7.4 5.3 1.3a9 9 0 013.6 3.6 10.5 10.5 0 018.8-4.9zm-40.8-2.4a5 5 0 01-3.4-1.3 4.1 4.1 0 01-1.3-3 4 4 0 011.3-3.1c.9-.9 2-1.3 3.4-1.3s2.5.4 3.4 1.3a4 4 0 011.4 3 4 4 0 01-1.4 3.1c-.9.9-2 1.3-3.4 1.3zm4 2.7v26.1h-8V61.4h8zM55.8 87.8a17 17 0 01-6.4-1.1 9.6 9.6 0 01-6.4-9h8.5c.1 1.2.6 2.1 1.3 2.8.7.6 1.6 1 2.8 1 1.2 0 2.1-.3 2.8-.9.7-.5 1-1.3 1-2.3 0-.8-.2-1.5-.8-2-.5-.5-1.2-1-2-1.3l-3.4-1.2a37 37 0 01-5.2-2 9.6 9.6 0 01-3.5-2.8 8 8 0 01-1.4-5c0-3.1 1.1-5.5 3.3-7.2 2.2-1.8 5.1-2.6 8.7-2.6 3.6 0 6.5.8 8.7 2.6a9.2 9.2 0 013.6 7.2h-8.7c0-1-.4-1.9-1.1-2.5a4 4 0 00-2.8-1 3 3 0 00-2.3.9c-.6.5-1 1.2-1 2.2 0 1 .6 1.9 1.6 2.5 1 .6 2.5 1.2 4.6 1.9 2.2.7 3.9 1.4 5.2 2 1.3.7 2.5 1.6 3.5 2.9 1 1.2 1.4 2.9 1.4 4.8s-.5 3.6-1.4 5.1a9.8 9.8 0 01-4.2 3.7 14 14 0 01-6.4 1.3z"
                fill="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M166.5 87.5V53h-8v34.6h8zm-4 12.9a5.1 5.1 0 100-10.3 5.1 5.1 0 000 10.3z"
                fill="#FD0"
            />
        </svg>
    );
};
