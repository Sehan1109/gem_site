import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/sell');
    }
  }, [user, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide both email and password to continue.');
      return;
    }

    login(email, password, name);
    navigate('/sell');
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl pt-20 pb-24">
      <div className="rounded-3xl border border-white/10 bg-surface-light p-10 shadow-xl shadow-black/20">
        <div className="mb-10">
          <p className="text-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">Open Seller Access</p>
          <h1 className="text-5xl font-serif mb-4">Login to Sell Your Gems</h1>
          <p className="text-white/70 leading-relaxed">
            Any visitor may join the site, login with their credentials, and submit a new gem listing. This is the first step to bringing your collection to market.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block text-sm text-white/60">
              Your Name
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Optional, used for your seller profile"
                className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <label className="block text-sm text-white/60">
              Email Address
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
          </div>

          <label className="block text-sm text-white/60">
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter a secure password"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </label>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-widest text-black transition-colors hover:bg-white hover:text-black"
            >
              Login & Sell
            </button>
            <Link to="/" className="text-white/70 hover:text-white text-sm transition-colors">
              Return to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
