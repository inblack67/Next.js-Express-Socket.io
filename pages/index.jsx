import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: 'John',
    },
  });

  return (
    <div className='container'>
      <h5 className='center'>Join Room</h5>
      <form
        onSubmit={handleSubmit(({ username, room }) => {
          router.push(`/room?username=${username}&room=${room}`);
        })}
      >
        <div className='input-field'>
          <input
            type='text'
            name='username'
            ref={register({
              required: true,
            })}
          />
          <span className='helper-text blue-text'>Name</span>
        </div>
        <div className='input-field'>
          <select
            ref={register({
              required: true,
            })}
            name='room'
          >
            <option value='' disabled defaultValue>
              Choose Your Poison
            </option>
            <option value='Node.js'>Node.js</option>
            <option value='React.js'>React.js</option>
            <option value='Next.js'>Next.js</option>
            <option value='GraphQL'>GraphQL</option>
          </select>
          <span className='helper-text blue-text'>Room</span>
        </div>
        <div className='input-field'>
          <button type='submit' className='btn red'>
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
