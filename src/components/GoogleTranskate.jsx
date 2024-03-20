import { useEffect } from "react";

const GoogleTranskate = () => {
    const googleTranslateElementInit = () => {
        if (window.google) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: 'en,ms,ta,zh-CN',
                    autoDisplay: false
                },
                "google_translate_element"
            );
        }
    };

    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        return () => {
            document.body.removeChild(addScript);
            window.googleTranslateElementInit;
        };
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default GoogleTranskate;