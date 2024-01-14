import { useNavigate } from "react-router-dom";

export function Error() {

    const navigate = useNavigate();

    return (
        <article className="error">
            <h6 className="error__header">404</h6>
            <p className="error__description">Страница не найдена</p>
            <div className="error__go-back"><a href={() => navigate(-1)}>Назад</a></div>
        </article>
    )
}