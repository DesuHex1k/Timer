export default function TimerNav({ timers }) {
    return (
        <nav className="p-4 rounded-md mx-auto">
            <ul className="flex flex-wrap justify-center gap-4">
                {timers.map(({ slug, seconds }) => {
                    const hours = Math.floor(seconds / 3600);
                    const minutes = Math.floor((seconds % 3600) / 60);

                    let title = "";
                    if (hours > 0) {
                        title = `${hours} Hour${hours > 1 ? "s" : ""}`;
                    } else {
                        title = `${minutes} Minute${minutes > 1 ? "s" : ""}`;
                    }

                    return (
                        <li key={slug}>
                            <a
                                href={`/timer/${slug}/`}
                                className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                {title} Timer
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
