import { useForm } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function Home() {
    const { data, setData, post, processing, errors } = useForm({
        url: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/');
    }

    return (
        <Layout title="Home">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-dark-100 mb-2">
                    Nepal URL Shortner
                </h1>
                <p className="text-gray-600">
                    Powered by <span className="text-primary font-semibold">npgo.to</span>
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="url" className="block mb-2 text-gray-700 font-medium">
                        Enter your long URL
                    </label>
                    <input
                        type="text"
                        id="url"
                        value={data.url}
                        onChange={e => setData('url', e.target.value)}
                        placeholder="https://example.com/your-very-long-url"
                        className={`w-full px-5 py-4 border-2 rounded-xl text-base transition-all duration-300 outline-none
                            ${errors.url
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10'
                            }`}
                        autoFocus
                    />
                    {errors.url && (
                        <p className="text-red-500 text-sm mt-2">{errors.url}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white 
                        rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30
                        active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {processing ? 'Shortening...' : 'Shorten URL'}
                </button>
            </form>

            <p className="text-center mt-8 text-gray-400 text-sm">
                Free, fast & reliable URL shortening service
            </p>
        </Layout>
    );
}
