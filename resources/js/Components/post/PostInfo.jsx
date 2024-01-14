import Content from "./Content";
import HeaderPost from "./HeaderPost";
import propTypes from 'prop-types';

export default function PostInfo({light, post}){
    PostInfo.propTypes = {
        post: propTypes.object,
        light: propTypes.bool
    };
    return (
        <>
            <HeaderPost light={light} post={post}/>
            <Content light={light} post={post}/>
        </>
    )
}
