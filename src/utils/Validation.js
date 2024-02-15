import { useState, useCallback } from "react";

const regExEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const regExName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
// const regExPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

export function useFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());

        if (name === 'name') {
            if (!regExName.test(value)) {
                setErrors({ ...errors, [name]: 'Некорректное имя' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        }

        // if (name === 'password') {
        //     if (!regExPassword.test(value)) {
        //         setErrors({ ...errors, [name]: 'Некорректный пароль' });
        //     } else {
        //         setErrors({ ...errors, [name]: '' });
        //     }
        // }

        if (name === 'email') {
            if (!regExEmail.test(value)) {
                setErrors({ ...errors, [name]: 'Некорректный email' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        }

        if (name === 'search') {
            if (value === null || value === '') {
                setErrors({ ...errors, [name]: 'Введите запрос' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        }
    };

    const formReset = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        }, [setValues, setErrors, setIsValid]);

    return { values, setValues, handleChange, errors, isValid, formReset };
}