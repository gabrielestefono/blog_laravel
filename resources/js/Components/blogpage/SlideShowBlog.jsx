import BannerBlog from './BannerBlog';
import PageTitle from './PageTitle';

export default function SlideShowBlog({light, post}) {
    return (
        <>
            <PageTitle light={light}/>
            <BannerBlog light={light} post={post}/>
        </>
    )
}
