import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskList from './tasks/TaskList';
import userActions from '../redux/actions/userActions'

const Home = (props) => {
    const currentUser = useSelector(state => state.currentUser)
    console.log('Current User >> ', currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getCurrentUser());
      }, [dispatch])

    return (
        <div class="main-container">
            <h1>Home</h1>
            {currentUser && currentUser.user && currentUser.username}
        </div>
    )
};

export default Home;