export function RepositoryItem(props) {
    console.log(props?.repository)
    return (
        <li>
            <strong>{props?.repository?.name}</strong>
            <p>{props?.repository?.description}</p>
            <a href={props?.repository?.link }>Acessar repositório</a>
        </li>
    )
}