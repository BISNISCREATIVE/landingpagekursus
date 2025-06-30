import { useState } from 'react';

type AuthFormProps = {
  type: 'login' | 'signup';
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
};

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (type === 'signup' && !name)) {
      setError('Semua field wajib diisi');
      return;
    }
    setError('');
    onSubmit({ email, password, name });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-md mx-auto mt-8 border border-primary">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">{type === 'login' ? 'Login' : 'Signup'}</h2>
      {type === 'signup' && (
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition">
        {type === 'login' ? 'Login' : 'Signup'}
      </button>
    </form>
  );
};

export default AuthForm; 