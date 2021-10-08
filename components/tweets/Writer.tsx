import {ChangeEvent, createRef, useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";
import {tweetProvider} from "../../services/tweetProvider";

const Writer = () => {
    const [value, setValue] = useState('');
    const [isTextarea, setIsTextarea] = useState(false);
    const field = createRef<HTMLTextAreaElement>();
    const router = useRouter();

    const handleFocus = () => {
        setIsTextarea(true);
    }

    const handleBlur = () => {
        if (!value?.trim()) {
            setIsTextarea(false);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!!value) {
            await fetch('http://localhost:3000/api/tweets', {
                method: 'POST',
                body: JSON.stringify({
                    message: value,
                })
            })
            await router.replace(router.asPath);
            setValue('');
        }
    }

    useEffect(() => {
        if (isTextarea) {
            field.current?.focus();
        }
    }, [isTextarea])

    const counter = useMemo(() => {
        return 140 - value.length;
    }, [value]);

    return (
        <form className="writer"  onSubmit={handleSubmit}>
            {!isTextarea && <input type="text" placeholder="Entrez votre texte ici..." onFocus={handleFocus} />}
            {!!isTextarea && (
                <div className="full-writer">
                    <textarea ref={field} onChange={handleChange} onBlur={handleBlur} maxLength={140} value={value} />
                    <p>caractères restants : {counter}</p>
                    <button type="submit">Tweet</button>
                </div>
            )}
        </form>
    );
}

export default Writer;