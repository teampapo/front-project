import { useState } from "react";
import "./style_orgstatuscheck.css";
import {useNavigate} from "react-router-dom";

function OrgStatusCheck_page() {
    const [isEditing, setIsEditing] = useState(false);
    const [showReasonForm, setShowReasonForm] = useState(false); // состояние для формы "Причина"

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const toggleReasonForm = () => {
        setShowReasonForm(!showReasonForm);
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="headersorgSC">
                <button className="exitbuttonSC" onClick={() => navigate("/")}>Выйти</button>
                <h1 className="textSC">ПРОВЕРКА ЗАЯВКИ</h1>
                <button className="deletebuttonSC">Удалить</button>
            </div>

            <div className="statusplate">
                <div className="status">
                    <label>Текущий статус:<input type="text" defaultValue="Новая" disabled/></label>
                    <button className="reasonbutton" onClick={toggleReasonForm}>Причина</button>
                </div>
                <div className="dates">
                    <div className="daterequest">
                        <label>Дата составления:<input type="text" defaultValue="6.03.2025" disabled/></label>
                    </div>
                    <div className="dateresponse">
                        <label>Дата рассмотрения:<input type="text" defaultValue="10.03.2025" disabled/></label>
                    </div>
                </div>
            </div>

            <div className="registrationSC">
                <div className="orginfoSC">
                    <h2>Информация об организации:</h2>
                    {['Полное название', 'Сокращенное', 'ИНН', 'КПП', 'ОГРН', 'Город', 'Адрес'].map((label, index) => (
                        <div className="orginfoitemSC" key={index}>
                            <label>{label}:</label>
                            <input type="text" disabled={!isEditing} />
                        </div>
                    ))}
                </div>
                <div className="contactinfoSC">
                    <h2>Контактное лицо:</h2>
                    {['Фамилия', 'Имя', 'Email', 'Номер тел.'].map((label, index) => (
                        <div className="contactinfoitemSC" key={index}>
                            <label>{label}:</label>
                            <input type="text" disabled={!isEditing} />
                        </div>
                    ))}
                    <div className="contactinfoitemSC">
                        <label>Доп. информация:</label>
                        <textarea disabled={!isEditing}></textarea>
                    </div>
                    <div className="buttonplateSC">
                        {isEditing ? (
                            <button className="repeatbuttonSC" onClick={toggleEditMode}>Пересоздать заявку</button>
                        ) : (
                            <button className="editbuttonSC" onClick={toggleEditMode}>Изменить</button>
                        )}
                        <button className="accbuttonSC" disabled>Личный кабинет</button>
                    </div>
                </div>
            </div>

            {/* Модальное окно с формой причины */}
            {showReasonForm && (
                <div className="modalSC">
                    <div className="modalSC-content">
                        <span className="closemodalSC" onClick={toggleReasonForm}>&times;</span>
                        <h2>Причина отклонения</h2>
                        <textarea className="reason-textarea" disabled></textarea>
                    </div>
                </div>
            )}
        </>
    );
}

export default OrgStatusCheck_page;
