import { useParams } from 'react-router';

function User() {
    const { id, Name } = useParams();

    const user = {
        name: `${Name}`,
        username: `user${id}`,
        bio: "Passionate developer. Love to build amazing apps.",
        avatar: `https://i.pravatar.cc/150?img=${id}`,
        location: "San Francisco, CA",
        website: "https://example.com"
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-2">
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-10 flex flex-col items-center w-full max-w-md">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 shadow-md mb-4 sm:mb-6"
                />
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 text-center">{user.name}</h1>
                <p className="text-blue-400 mb-1 sm:mb-2 text-center">@{user.username}</p>
                <p className="text-gray-300 text-center mb-3 sm:mb-4 text-sm sm:text-base">{user.bio}</p>
                <div className="flex items-center text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                        <path d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {user.location}
                </div>
                <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-all text-center text-sm sm:text-base"
                >
                    {user.website}
                </a>
            </div>
        </div>
    );
}

export default User;