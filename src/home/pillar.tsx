interface PillarProp {
  heading: string;
  body: string;
  columnNumber: number;
}

export const Pillar = ({ heading, body, columnNumber }: PillarProp) => {
  return (
    <div className={`col column${columnNumber}`}>
      <div className="fadingLine"></div>
      <h2>{heading}</h2>
      <p>{body}</p>
    </div>
  );
};
