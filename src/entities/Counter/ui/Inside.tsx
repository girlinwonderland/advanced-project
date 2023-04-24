type TInside = { value: number }
export const Inside: React.FC<TInside> = ({ value }: TInside) => {
    return <div>{value}</div>;
};
