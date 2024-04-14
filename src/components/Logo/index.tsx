interface Props extends React.ComponentProps<'svg'> {
    size?: number;
}

export const Logo: React.FC<Props> = ({ size = 40, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 400 180"
        fill="none"
        {...props}
    >
        <circle cx="310" cy="90" r="90" fill="#F1BF42"/>
        <circle cx="90" cy="90" r="90" fill="#F1BF42"/>
    </svg>
);
