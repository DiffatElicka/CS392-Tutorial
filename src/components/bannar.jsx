import { useJsonQuery } from '../utilities/fetch';


const Bannar = () => {
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (error) return <h1>Error loading course data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading course data...</h1>;
    if (!data) return <h1>No course data found</h1>;
    
return (
    <h1 style={{textAlign: 'center'}}>
        {data.title}
    </h1>
);
}
  
export default Bannar;