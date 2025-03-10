import "./style.css";

function Installationservice() {
    return (
        <div className="servicepage">
            <header className="servicepage-header">Выберите услугу</header>
            <div className="installationmaindiv">
                <h1 className="service-title">МОЙКА</h1>
                <div className="installationservicediv">
                    <div className="left-column">
                        <div className="washingdiv">
                            <label className="choose-city">Выберите город:</label>
                            <select>
                                <option>Самара</option>
                            </select>
                        </div>
                        <div className="washingdiv">
                            <label className="choose-org">Организация:</label>
                            <select>
                                <option>АВАНГАРД ул. Пушкина 6</option>
                            </select>
                        </div>
                        <div className="washingdiv">
                            <label className="cost">ИТОГО:</label>
                            <input type="number" value="950" disabled />
                        </div>
                    </div>
                    <div className="center-column">
                        <div className="washingdiv">
                            <label className="choose-service">Выберите желаемые услуги:</label>
                            <div className="checkbox-group">
                                <input type="checkbox" /> Услуга 1 - 200 руб. (20 мин.)
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="washingdiv">
                            <label className="choose-time">Выберите время на сегодня:</label>
                            <select>
                                <option>10:00 - 11:40</option>
                            </select>
                        </div>
                        <div className="washingdiv">
                            <label className="choose-time">Выберите время на сегодня:</label>
                            <select>
                                <option>10:00 - 11:40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="installationbutton-container">
                    <button className="installationbutton">Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}

export default Installationservice;
