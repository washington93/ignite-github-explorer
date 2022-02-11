import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "ignite-github-explorer",
    description: "A simple Github explorer",
    link: "https://github.com/washington93/ignite-github-explorer"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}