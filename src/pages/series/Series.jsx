import React from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import usePlayList from '../../hooks/usePlayList';
import Loading from '../../components/loading/Loading';
import Container from '../../components/container/Container';

const Series = () => {
    const [playList, loading] = usePlayList();

    if (loading) {
        return <Loading />;
    }
    if (!Array.isArray(playList)) {
        return <div>Error: Movies data is not an array.</div>;
    }

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -pl-4 -ml-4">
            {playList.map((item, index) => (
                <Link
                    key={`${item?.id}-${index}`}
                    to="/series/seriesParts"
                    className="card w-96 mt-5 h-60 bg-base-100 shadow-xl image-full group cursor-pointer mx-auto"
                >
                    <figure>
                        <img
                            className="group-hover:scale-110 transition w-full md:w-auto"
                            src={item?.image}
                            alt="thumbnail"
                        />
                    </figure>
                    <div className="card-body absolute">
                        <h2 className="relative top-28 mb-2">{item?.playlistName}</h2>
                        <p className="text-5xl relative top-24 flex">
                            <MdOutlinePlaylistAdd />
                            {item?.numberOfVideos}
                            <small className="text-sm relative top-5">Videos</small>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        </Container>
    );
};

export default Series;
