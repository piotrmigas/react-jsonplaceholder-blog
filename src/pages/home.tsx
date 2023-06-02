import User from '../components/User';
import { useGetUsersQuery } from '../redux/api';

const Home = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>
    );
  if (isError) return <p className='text-center my-3'>Error fetching posts...</p>;

  return (
    <div className='container'>
      <div className='row'>{users?.map((user) => <User user={user} key={user?.id} />).slice(0, 8)}</div>
    </div>
  );
};

export default Home;
