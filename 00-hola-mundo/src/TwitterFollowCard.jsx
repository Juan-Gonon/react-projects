import React, { useState } from "react";

export const TwitterFollowCard = ({
    addAt,
    userName,
    name,
    initialIsFollowing,
}) => {
    // console.log(isFollowing)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button";

    const handleIsFollowing = () => {
        setIsFollowing((antes) => !antes);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src={`https://unavatar.io/readcv/${userName}`}
                    alt="avatar"
                    className="tw-followCard-avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">
                        {addAt(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleIsFollowing}>
                    <span className="tw-followCard-text"> {text}</span>
                    <span className="tw-followCard-stopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    );
};
