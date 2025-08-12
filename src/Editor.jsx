import React, { useEffect, useState } from "react";
import img from './logo.svg'
import './index.css'
import useLocalStorage from "./storage";

const Editor = () => {
    const [html, setHtml] = useLocalStorage('html','');
    const [css, setCss] =  useLocalStorage('css','');
    const [js, setJs] =  useLocalStorage('js','');
    const [codepencode, setCodepenCode] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCodepenCode(`
            <html>
            <style>${css}</style>
            <script>${js}</script>
            <body>${html}</body>
        </html>`

            )
        }, 200)
        return () => clearTimeout(timeout);
    }, [html, css, js])
    return (
        <div className="wrapper">
            <div className="header">
                <img src={img} alt='' />
                <span>Codepen</span>
            </div>
            <div className="input-cover">
                <textarea type='text' className="input" placeholder="HTML" value={html} onChange={(e) => { setHtml(e.target.value) }} />
                <div className="width"></div>
                <textarea type='text' className="input" placeholder="CSS" value={css} onChange={(e) => { setCss(e.target.value) }} />
                <div className="width"></div>
                <textarea type='text' className="input" placeholder="JS" value={js} onChange={(e) => setJs(e.target.value)} />
            </div>
            <div className="output">
                <iframe srcDoc={codepencode} sandbox="allow-scripts" height="100%" width="100%" title="Iframe Example"></iframe>

            </div>
        </div>
    );
}
export default Editor;