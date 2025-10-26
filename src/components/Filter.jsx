import {useMemo, useState} from 'react';

export const Filter = () => {
    const [planets, setPlanets] = useState(["Sun","Mercury","Venus","Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Moon", "Io", "Europa", "Ganymede", "Callisto", "Titan", "Rhea", "Iapetus", "Dione", "Tethys", "Enceladus", "Mimas", "Charon"]);
    const [query, setQuery] = useState("");

    const filteredPlanets = useMemo(() => {
        return planets.filter(planet => planet.toLowerCase().includes(query.toLowerCase()));
    }, [planets, query]);

    return (
        <div>
            <input type="text" placeholder="Search planets..." onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredPlanets.map((planet, index) => (
                    <li key={index}>{planet}</li>
                ))}
            </ul>
        </div>
    );

};