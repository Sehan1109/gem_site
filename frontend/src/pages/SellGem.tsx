import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type ListingForm = {
  name: string;
  origin: string;
  type: string;
  carat: string;
  price: string;
  cert: string;
  color: string;
  img: string;
  desc: string;
};

type Listing = ListingForm & {
  id: number;
  sellerEmail: string;
  sellerName: string;
  createdAt: string;
};

const STORAGE_KEY = 'aetheria-sell-listings';

export function SellGem() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [form, setForm] = useState<ListingForm>({
    name: '',
    origin: '',
    type: '',
    carat: '',
    price: '',
    cert: '',
    color: '',
    img: '',
    desc: '',
  });
  const [savedListings, setSavedListings] = useState<Listing[]>([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSavedListings(JSON.parse(stored) as Listing[]);
    }
  }, [isAuthenticated, navigate]);

  const updateField = (field: keyof ListingForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.origin || !form.type || !form.price || !form.desc) {
      setError('Please complete the required fields before submitting your listing.');
      return;
    }

    const newListing: Listing = {
      ...form,
      id: Date.now(),
      sellerEmail: user?.email || 'anonymous@aetheria.com',
      sellerName: user?.name || 'Anonymous Seller',
      createdAt: new Date().toISOString(),
    };

    const updated = [newListing, ...savedListings];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedListings(updated);
    setSuccess('Your gem listing has been created successfully. It will appear in your seller dashboard shortly.');
    setError('');
    setForm({
      name: '',
      origin: '',
      type: '',
      carat: '',
      price: '',
      cert: '',
      color: '',
      img: '',
      desc: '',
    });
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl pt-20 pb-24">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-surface-light p-10 shadow-xl shadow-black/20">
          <div className="mb-10">
            <p className="text-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">Seller Dashboard</p>
            <h1 className="text-5xl font-serif mb-4">List a Gem for Sale</h1>
            <p className="text-white/70 leading-relaxed">
              Submit your gem details and create a listing instantly. Any visitor may login and start selling gems through the platform.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <label className="block text-sm text-white/60">
                Gem Name
                <input
                  value={form.name}
                  onChange={e => updateField('name', e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
              <label className="block text-sm text-white/60">
                Origin
                <input
                  value={form.origin}
                  onChange={e => updateField('origin', e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <label className="block text-sm text-white/60">
                Gem Type
                <input
                  value={form.type}
                  onChange={e => updateField('type', e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
              <label className="block text-sm text-white/60">
                Carat Weight
                <input
                  value={form.carat}
                  onChange={e => updateField('carat', e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <label className="block text-sm text-white/60">
                Price Description
                <input
                  value={form.price}
                  onChange={e => updateField('price', e.target.value)}
                  placeholder="e.g. Upon Request, Inquire, Private Sale"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
              <label className="block text-sm text-white/60">
                Certification
                <input
                  value={form.cert}
                  onChange={e => updateField('cert', e.target.value)}
                  placeholder="e.g. GIA, Gübelin, SSEF"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <label className="block text-sm text-white/60">
                Color
                <input
                  value={form.color}
                  onChange={e => updateField('color', e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
              <label className="block text-sm text-white/60">
                Image URL
                <input
                  value={form.img}
                  onChange={e => updateField('img', e.target.value)}
                  placeholder="Optional URL for your gem image"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
            </div>

            <label className="block text-sm text-white/60">
              Description
              <textarea
                value={form.desc}
                onChange={e => updateField('desc', e.target.value)}
                rows={6}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-black/10 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-emerald-300 text-sm">{success}</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-widest text-black transition-colors hover:bg-white hover:text-black"
            >
              Save Listing
            </button>
          </form>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-surface-light p-10 shadow-xl shadow-black/20">
          <div className="mb-8">
            <h2 className="text-3xl font-serif mb-3">Your Seller Profile</h2>
            <p className="text-white/70 leading-relaxed">
              Logged in as <span className="text-white">{user?.name}</span> ({user?.email}). Every visitor can login and submit a gem sale.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-white/50 mb-3">Recent Listings</h3>
              {savedListings.length === 0 ? (
                <p className="text-white/60 text-sm">No listings created yet. Your first gem will appear here after you submit the form.</p>
              ) : (
                <div className="space-y-4">
                  {savedListings.slice(0, 4).map(listing => (
                    <div key={listing.id} className="rounded-3xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-white/80 font-semibold">{listing.name}</p>
                      <p className="text-xs text-white/50">{listing.type} • {listing.origin}</p>
                      <p className="text-xs text-white/50">{new Date(listing.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
              <p className="text-sm text-white/60 leading-relaxed">
                This seller flow is intentionally open: anyone can login, list a gem, and begin selling through the platform. Listings persist locally in your browser.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
