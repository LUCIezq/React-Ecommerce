import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleDarkMode = () => {

    const [theme, setTheme] = useState('light');

    const handleToggleMode = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        const html = document.querySelector('html');

        if (theme === 'dark') {
            html?.classList.add('dark');
        } else {
            html?.classList.remove('dark');
        }

    }, [theme]);

    return (
        <>
            {
                <div onClick={handleToggleMode} className="cursor-pointer bg-[#505050] p-1 rounded-[7px] hover:bg-[#646464] transition-all">
                    {
                        theme === 'light' ? <MoonIcon color="white" strokeWidth={1} /> : <SunIcon strokeWidth={1} />
                    }
                </div>
            }
        </>
    )
}

export default ToggleDarkMode;