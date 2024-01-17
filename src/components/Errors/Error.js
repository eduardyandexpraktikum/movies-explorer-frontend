import { useNavigate } from "react-router-dom";

export function Error() {

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <article className="error">
            <h6 className="error__header">404</h6>
            <p className="error__description">Страница не найдена</p>
            <button className="error__go-back" onClick={goBack}>Назад</button>
        </article>
    )
}