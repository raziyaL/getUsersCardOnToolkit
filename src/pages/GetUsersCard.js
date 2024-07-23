import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../store/UsersSlice";
import UsersCards from "../components/UsersCards";

function GetUsersCard() {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.UserSlice);
    console.log(posts)

    useEffect(() => {
        dispatch(getCards())
    }, []);

    return (
        <div>
            <div style={{display:"flex", flexWrap:"wrap", gap:"30px", width:"830px", margin:"0 auto", textAlign:"center"}}>
                {posts.map((post)=><UsersCards users = {post} key={post.id}/>)}
            </div>
        </div>
    );
}

export default GetUsersCard;