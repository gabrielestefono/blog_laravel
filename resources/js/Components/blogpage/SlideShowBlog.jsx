import BannerBlog from './BannerBlog';
import PageTitle from './PageTitle';

export default function SlideShowBlog({light}) {
    return (
        <>
            <PageTitle light={light}/>
            <BannerBlog light={light}/>
        </>
    )
}
