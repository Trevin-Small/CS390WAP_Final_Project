import { Recipe } from '../components/recipe';
import { useSearchParams } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const RecipePage = (({data}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      {data.length > 0
        ? <Recipe recipe={data[searchParams.get('id')]} />
        : <Spinner />
      }
    </>
  );

});

export { RecipePage };