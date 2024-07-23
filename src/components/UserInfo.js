import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/UsersSlice'; // Настройте путь импорта при необходимости
import { useParams } from 'react-router-dom';

function UserInfo() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user, loading } = useSelector((state) => state.UserSlice);

    useEffect(() => {
        dispatch(getUser(id));
    }, [dispatch, id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }


    if (!user) {
        return <div>Нет данных о пользователе</div>;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <img
                style={{ width: '100px', height: '100px' }}
                src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
                alt="Аватар пользователя"
            />
            <div>
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <h2>Адрес</h2>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <p>{user.address.geo.lat}, {user.address.geo.lng}</p>
                <h2>Компания</h2>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
}

export default UserInfo;