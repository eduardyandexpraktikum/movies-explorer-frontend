import { useState, useCallback } from "react";

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
            if (!target.checkValidity()) {
                setErrors({ ...errors, [name]: 'Некорректное имя' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        }

        if (name === 'password') {
            if (!target.checkValidity()) {
                setErrors({ ...errors, [name]: 'Минимальная длина пароля: 6' });
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