import { FC } from 'react';

type Props = {
  color: string;
  fontSize: string;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return (
    <div>
      <p style={{ color, fontSize }}>This is the text</p>
    </div>
  );
};
