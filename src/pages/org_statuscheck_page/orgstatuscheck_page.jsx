import React, { useState } from "react";
import "./style_orgstatuscheck.css";
import { useNavigate } from "react-router-dom";
import Deleteparthpage from "../deletepartnership/deletepartnership";

function OrgStatusCheck_page() {
    const [showReasonForm, setShowReasonForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [status, setStatus] = useState("Отклонена");

    const navigate = useNavigate();


    const toggleReasonForm = () => {
        setShowReasonForm(!showReasonForm);
    };

    const validStatuses = ["Новая", "В работе", "Исполнена", "Отклонена"];
    const isStatusValid = validStatuses.includes(status);

    return (
        <>
            <div className="headersorgSC">
                <button className="exitbutton" title="Вернуться на главную" onClick={() => navigate("/")}>
                    <img src="/src/icons/exit.png" alt="Exit"/>
                </button>
                <h1 className="textSC">ПРОВЕРКА ЗАЯВКИ</h1>
                <button className="deletebuttonSC" title="Удалить аккаунт" onClick={() => setShowDeleteModal(true)}>
                    <img src="/src/icons/close.png" alt="Delete"/>
                </button>
            </div>

            <div className="statusplate">
                <div className="status">
                    <label>Текущий статус: <input type="text" value={status} disabled/></label>
                    {status === "Отклонена" && isStatusValid && (
                        <button className="reasonbutton" onClick={toggleReasonForm}>Причина</button>
                    )}
                </div>
                <div className="dates">
                    <div className="daterequest">
                        <label>Дата составления: <input type="text" defaultValue="6.03.2025" disabled /></label>
                    </div>
                    <div className="dateresponse">
                        <label>Дата рассмотрения: <input type="text" defaultValue="10.03.2025" disabled /></label>
                    </div>
                </div>
            </div>

            <div className="registrationSC">
                <div className="orginfoSC">
                    <h2>Информация об организации:</h2>
                    {["Полное название", "Сокращенное", "ИНН", "КПП", "ОГРН", "Город", "Адрес"].map((label, index) => (
                        <div className="orginfoitemSC" key={index}>
                            <label>{label}:</label>
                            <input type="text" disabled />
                        </div>
                    ))}
                </div>
                <div className="contactinfoSC">
                    <h2>Контактное лицо:</h2>
                    {["Фамилия", "Имя", "Email", "Номер тел."].map((label, index) => (
                        <div className="contactinfoitemSC" key={index}>
                            <label>{label}:</label>
                            <input type="text" disabled />
                        </div>
                    ))}
                    <div className="buttonplateSC">
                        <button className="accbuttonSCheck" onClick={() => navigate("/create/services")}>Личный кабинет</button>
                    </div>
                </div>
            </div>

            {showReasonForm && (
                <div className="modalSC">
                    <div className="modalSC-content">
                        <span className="closemodalSC" onClick={toggleReasonForm}>&times;</span>
                        <h2>Причина отклонения</h2>
                        <textarea className="reason-textarea" disabled></textarea>
                    </div>
                </div>
            )}

            {showDeleteModal && (
                <Deleteparthpage onClose={() => setShowDeleteModal(false)} />
            )}
        </>
    );
}

export default OrgStatusCheck_page;
