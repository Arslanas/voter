import {useEffect, useRef, useState} from "react";
import {IS_DEV} from "../util/Config";

const SSE = () => {
    const [facts, setFacts] = useState([]);
    const flag = useRef(false);


    useEffect(() => {
        if (flag.current) return
        const events = new EventSource(IS_DEV ? 'http://localhost:3001/events' : 'events');

        events.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);

            setFacts((facts) => facts.concat(parsedData));
        };
        flag.current = true
        // return () => events.close()
    }, []);

    return (
        <table className="stats-table">
            <thead>
            <tr>
                <th>Fact</th>
                <th>Source</th>
            </tr>
            </thead>
            <tbody>
            {
                facts.map((fact, i) =>
                    <tr key={i}>
                        <td>{fact.info}</td>
                        <td>{fact.source}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );

}

export default SSE