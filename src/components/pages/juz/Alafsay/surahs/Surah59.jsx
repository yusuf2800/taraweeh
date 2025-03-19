import "../../../../../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Surah59 = () => {
    useEffect(() => {
        document.title = "Surah 59";
        let metaTag = document.querySelector('meta[property="og:image"]');

        if (metaTag) {
            metaTag.setAttribute(
                "content",
                "https://api2.quran-pro.com/images/mishary-rashid-alafasy/mishary-rashid-alafasy-medium.webp?version=1686738242860"
            );
        }

        const iconLink = document.querySelector('link[rel="apple-touch-icon"]');
        if (iconLink) {
            iconLink.setAttribute(
                "href",
                "https://api2.quran-pro.com/images/mishary-rashid-alafasy/mishary-rashid-alafasy-medium.webp?version=1686738242860"
            );
        }
    }, []);

    const audios = [
        {
            id: 59,
            name: "Surah 59",
            audio_path: `https://res.cloudinary.com/ddsiorkrx/video/upload/v1740422996/surah59.mp3`,
            file_path: "",
        },
    ];

    return (
        <div className="flex h-screen items-center justify-center bg-[var(--bg-color)] bg-[image:var(--bg-img)]">
            {audios.map((audio) => (
                <div
                    key={audio.id}
                    className="text-center animation-slideUp my-5 flex h-[230px] w-[400px] flex-col items-center justify-center rounded-[7px] px-5 py-4 text-[20px] shadow-[2px_2px_10px_rgba(0,0,0,0.4)]"
                >
                    <label className="text-[var(--color)] font-bold">{audio.name}</label>
                    <audio
                        src={audio.audio_path}
                        controls
                        className="mt-3 w-[350px] cursor-pointer"
                    ></audio>
                </div>
            ))}
            <Link to="/alafsay">
                <button className="bg-[rgba(253, 240, 220, 0.3)] animate-slideRight fixed right-5 bottom-5 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
                    <svg
                        className="back"
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="rgb(22, 60, 94)"
                    >
                        <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default Surah59;
