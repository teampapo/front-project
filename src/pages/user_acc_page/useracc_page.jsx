import { useEffect, useState } from "react";
import "./style_useracc.css";
import { useNavigate } from "react-router-dom";
import Deleteaccpage from "../deleteaccpage/deleteaccpage";
import { getCustomer } from "../../api/Customer";

 function UserAcc_page() {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Состояние для модального окна удаления
    useEffect(()=>{
        getCustomer(localStorage.getItem("jwt"),setEmail,setSurname,setName,setPhone,setAddInfo,setPatronymic);
    })


    // State variables for form fields
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [addInfo, setAddInfo] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    // Validation functions
    const validateEmail = (emailValue) => {
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
        return isValidEmail.test(emailValue);
    };

    const validateSurname = (surnameValue) => {
        const isValidSurname = /^[А-ЯЁа-яё\-]+$/;
        return isValidSurname.test(surnameValue);
    };

    const validateName = (nameValue) => {
        const isValidName = /^[А-ЯЁа-яё\-]+$/;
        return isValidName.test(nameValue);
    };

    const validatePhone = (phoneValue) => {
        const isValidPhone = /^(\7|8)\d{10}$/;
        return isValidPhone.test(phoneValue);
    };

    // Handlers for input changes
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };

    const handleSurnameChange = (e) => {
        const surnameValue = e.target.value;
        setSurname(surnameValue);
    };

    const handleNameChange = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);
    };

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value.replace(/\D/g, "").slice(0, 11);
        setPhone(phoneValue);
    };

    const handleAddInfoChange = (e) =>{
        setAddInfo(e.target.value);
    }

    const handlePatronymicChange = (e) =>{
        setPatronymic(e.target.value);
    }

    // Function to check if all required fields are filled and valid
    const areRequiredFieldsValid = () => {
        if (!validateEmail(email) || !validateSurname(surname) || !validateName(name) || !validatePhone(phone)) {
            setErrorMessage("Заполните все обязательные поля корректно!");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    return (
        <div>
            <div className="headers">
                <div className="headexit">
                    <button className="exitbuttonuser" title="Выйти из аккаунта" onClick={() => navigate("/")}>
                        <img src="/src/icons/exit.png" alt="Exit"/>
                    </button>
                </div>
                <div className="headtext">
                    <div className="headname">
                        <button className="homebuttonuser" title="Вернуться на главную" onClick={() => navigate("/")}>
                            <h1>PIONEER</h1>
                            <img src="/src/icons/home.png" alt="Home"/>
                        </button>
                    </div>
                    <div className="headpodtext">
                        <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
                    </div>
                </div>
                <div className="headdelete">
                    <button className="deletebutton" title="Удалить аккаунт" onClick={() => setIsDeleteModalOpen(true)}>
                        <img src="src/icons/close.png" alt="Delete"/>
                    </button>
                </div>
            </div>

            <div className="headers">
                <div className="info">
                    <div className="infoitem">
                        <label>ФАМИЛИЯ*:</label>
                        <input
                            type="text"
                            placeholder="ИВАНОВ"
                            disabled={!isEditing}
                            value={surname}
                            onChange={handleSurnameChange}
                        />
                    </div>
                    <div className="infoitem">
                        <label>ИМЯ*:</label>
                        <input
                            type="text"
                            placeholder="ИВАН"
                            disabled={!isEditing}
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="infoitem">
                        <label>ОТЧЕСТВО:</label>
                        <input type="text" placeholder="ИВАНОВИЧ" disabled={!isEditing}
                        value={patronymic}
                               onChange={handlePatronymicChange}
                        />
                    </div>
                    <div className="infoitem">
                        <label>НОМЕР ТЕЛ.*:</label>
                        <input
                            type="text"
                            placeholder="79990001110"
                            disabled={!isEditing}
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="infoitem">
                        <label>EMAIL*:</label>
                        <input
                            type="text"
                            placeholder="ivanov@mail.ru"
                            disabled={!isEditing}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>
                <div className="dopinfoitem">
                    <label>ДОП. ИНФОРМАЦИЯ:</label>
                    <textarea placeholder="Дополнительная информация..." disabled={!isEditing} value={addInfo}
                    onChange={handleAddInfoChange}
                    ></textarea>
                </div>
            </div>

            <div className="buttonplate">
            {!isEditing ? (
                <button className="editbutton" onClick={() => setIsEditing(true)}>
                    Изменить
                </button>
            ) : (
                <button
                    className="editbutton"
                    onClick={() => {
                        if (areRequiredFieldsValid()) {
                            setIsEditing(false);
                        }
                    }}
                >
                    Сохранить
                </button>
            )}
            {errorMessage && <span className="error">{errorMessage}</span>}
            <div className="applications">
                <button className="viewbutton" onClick={() => navigate("/apps")}>Заявки</button>
            </div>
        </div>

            {isDeleteModalOpen && <Deleteaccpage onClose={() => setIsDeleteModalOpen(false)}/>}
        </div>
    );
}

export default UserAcc_page;