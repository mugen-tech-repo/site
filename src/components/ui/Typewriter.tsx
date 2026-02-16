import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
    cursorClassName?: string;
}

const Typewriter = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
    className = "",
    cursorClassName = "",
}: TypewriterProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (isDeleting) {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText((prev) => prev.slice(0, -1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        } else {
            const fullText = words[currentWordIndex];
            if (text.length < fullText.length) {
                timeout = setTimeout(() => {
                    setText((prev) => fullText.slice(0, prev.length + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        }

        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        currentWordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);

    const renderText = () => {
        const remaining = text;
        const target = "digitais";
        const targetTech = "tecnologia";

        const matchIndex = remaining.toLowerCase().indexOf(target);
        const matchIndexUpper = remaining.toLowerCase().indexOf(targetTech);

        if (matchIndex !== -1) {
            const before = remaining.slice(0, matchIndex);
            const match = remaining.slice(matchIndex, matchIndex + target.length);
            const after = remaining.slice(matchIndex + target.length);

            return (
                <>
                    {before}
                    <span className="text-gradient">{match}</span>
                    {after}
                </>
            )
        }

        if (matchIndexUpper !== -1) {
            const before = remaining.slice(0, matchIndexUpper);
            const match = remaining.slice(matchIndexUpper, matchIndexUpper + targetTech.length);
            const after = remaining.slice(matchIndexUpper + targetTech.length);

            return (
                <>
                    {before}
                    <span className="text-gradient">{match}</span>
                    {after}
                </>
            )
        }

        return text;
    };

    return (
        <span className={className}>
            {renderText()}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
};

export default Typewriter;
