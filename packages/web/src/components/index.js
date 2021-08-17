import { useSelector } from 'react-redux';

export const useSafeAreaFrame = () => {

  const width = useSelector(state => state.window.width);
  const height = useSelector(state => state.window.height);

  return { x: 0, y: 0, width, height };
};
