import { useState } from "react";
import "./App.css";

function App() {
    const [countries, setCountries] = useState([]);

    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const addCountryHandler = (e) => {
        e.preventDefault();
        if (country === "") {
            alert("국가명을 입력해주세요.");
            return;
        }

        const newCountry = {
            id: new Date().getTime(),
            name: country,
            gold: gold,
            silver: silver,
            bronze: bronze,
        };

        setCountries([...countries, newCountry]);

        // input에 연결되어있는 state들을 초기화
        setCountry("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    const updateCountryHandler = (e) => {
        e.preventDefault();
        // (1) input창 중에 나라이름에 매칭된 state 정보 가져옴
        // (2) state에 있는 나라이름으로 현재 존재하는 countries 배열에서 찾아야함(find - 내가 수정하려고 하는 대상 국가)
        const targetCountry = countries.find((element) => element.name === country);

        // (3) 수정 이후에도 길이가 같은 배열이 나오도록 map을 사용
        // (3-1) map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하면 금은동 state에 맞게 수정하여 return
        // (3-2) map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하지 않으면 그대로 return
        const newCountries = countries.map((element) => {
            if (element.name === targetCountry.name) {
                return { id: element.id, name: element.name, gold: gold, silver: silver, bronze: bronze };
            }
            return element;
        });

        // (4) setCountries
        setCountries(newCountries);

        // (5) input에 연결되어있는 state들을 초기화
        setCountry("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    const deleteCountryHandler = (id) => {
        const deleteCountries = countries.filter((element) => {
            return element.id !== id;
        });

        setCountries(deleteCountries);
    };

    return (
        <>
            <h1>2024 파리 올림픽</h1>
            <form className="input-group">
                <div className="input-field">
                    <div>국가명</div>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="국가 입력"></input>
                </div>
                <div className="input-field">
                    <div>금메달</div>
                    <input type="number" value={gold} onChange={(e) => setGold(e.target.value)}></input>
                </div>
                <div className="input-field">
                    <div>은메달</div>
                    <input type="number" value={silver} onChange={(e) => setSilver(e.target.value)}></input>
                </div>
                <div className="input-field">
                    <div>동메달</div>
                    <input type="number" value={bronze} onChange={(e) => setBronze(e.target.value)}></input>
                </div>
                <div className="button-field">
                    <button onClick={addCountryHandler}>국가 추가</button>
                    <button onClick={updateCountryHandler}>업데이트</button>
                </div>
            </form>
            <div>
                <table>
                    {countries.length !== 0 ? (
                        <thead>
                            <tr>
                                <th>국가명</th>
                                <th>금메달</th>
                                <th>은메달</th>
                                <th>동메달</th>
                                <th>액션</th>
                            </tr>
                        </thead>
                    ) : (
                        "아직 추가된 국가가 없습니다. 메달을 추적하세요!"
                    )}
                    <tbody>
                        {countries
                            .sort((a, b) => b.bronze - a.bronze)
                            .sort((a, b) => b.silver - a.silver)
                            .sort((a, b) => b.gold - a.gold)
                            .map((country) => {
                                return (
                                    <tr key={country.id}>
                                        <td>{country.name}</td>
                                        <td>{country.gold}</td>
                                        <td>{country.silver}</td>
                                        <td>{country.bronze}</td>
                                        <td>
                                            <button onClick={() => deleteCountryHandler(country.id)}>삭제</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
