import Content from "./Content";
import HeaderPost from "./HeaderPost";

export default function PostInfo({light}){
    return (
        <>
            <HeaderPost light={light}/>
            <Content light={light}/>
        </>
    )
}
