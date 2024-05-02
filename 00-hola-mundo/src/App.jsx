import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export const App = () => {
    const addAt = (userName) => `@${userName}`;

   
    return (
        <article className="App">
            <TwitterFollowCard
                addAt={addAt}
                userName="elenatorro"
                name="Elena"
                initialIsFollowing={true}
            />
            <TwitterFollowCard
                addAt={addAt}
                userName="midudev"
                name="Miguel"
                initialIsFollowing={false}
            />
            <TwitterFollowCard
                addAt={addAt}
                userName="elenatorro"
                name="Elena"
                initialIsFollowing={false}
            />
        </article>
    );
};
