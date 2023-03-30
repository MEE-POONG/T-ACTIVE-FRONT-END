import { useState } from 'react';

export default function ScrollDemo() {
    const [count, setCount] = useState(0);

    function handleScroll() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>The onscroll Event</h1>
            <p>Try the scrollbar in div.</p>
            <div style={{ border: '1px solid black', width: '200px', height: '10000000000000000000000px', overflow: 'scroll' }} onScroll={handleScroll}>
                In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
                <br />
                <br />
                'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.'
            </div>

            <p>Scrolled <span id="demo">{count}</span> times.</p>
        </>
    );
}





