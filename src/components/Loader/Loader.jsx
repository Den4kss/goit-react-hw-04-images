import { Circles } from 'react-loader-spinner';
import { LoadContainer } from './Loader.styled';

export function Loader() {
  return (
    <LoadContainer>
      <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </LoadContainer>
  );
}
